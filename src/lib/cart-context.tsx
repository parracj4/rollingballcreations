'use client'

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react'
import { Sculpture } from './data'

interface CartItem {
  sculpture: Sculpture
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; sculpture: Sculpture }
  | { type: 'REMOVE_ITEM'; sculptureId: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART'; items: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (sculpture: Sculpture) => void
  removeFromCart: (sculptureId: string) => void
  clearCart: () => void
  toggleCart: () => void
  cartTotal: number
  cartCount: number
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        (item) => item.sculpture.id === action.sculpture.id
      )
      if (existingItem) {
        // Rolling ball sculptures are unique - can't add duplicates
        return state
      }
      return {
        ...state,
        items: [...state.items, { sculpture: action.sculpture, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.sculpture.id !== action.sculptureId
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'SET_CART':
      return { ...state, items: action.items }
    default:
      return state
  }
}

const CART_STORAGE_KEY = 'rolling-ball-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart)
        dispatch({ type: 'SET_CART', items })
      } catch (e) {
        console.error('Failed to parse cart:', e)
      }
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  const addToCart = (sculpture: Sculpture) => {
    dispatch({ type: 'ADD_ITEM', sculpture })
  }

  const removeFromCart = (sculptureId: string) => {
    dispatch({ type: 'REMOVE_ITEM', sculptureId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const cartTotal = state.items.reduce(
    (total, item) => total + (item.sculpture.price || 0) * item.quantity,
    0
  )

  const cartCount = state.items.length

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
