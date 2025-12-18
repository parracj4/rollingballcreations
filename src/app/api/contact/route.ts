import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json()

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Here you would typically send an email or save to a database
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, subject, message })

    // TODO: Add email sending logic (e.g., using Resend, SendGrid, or Nodemailer)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
