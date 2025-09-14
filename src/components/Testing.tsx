'use client'

import { useState, useEffect } from 'react'
import { HeroSection } from './sections/HeroSection'
import { AIChatSection } from './sections/AIChatSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { FAQSection } from './sections/FAQSection'
import { AccessSection } from './sections/AccessSection'
import { sendMessage } from '@/lib/api'
import type { Message, AccessForm } from '@/types/chat'

export function Testing() {
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! I'm your Gamification Assistant, here to provide expert guidance on gamification, implementation strategies, and best practices for user engagement. What would you like to know about gamification?", 
      sender: 'ai',
      timestamp: new Date('2024-01-01T10:00:00Z') // Static timestamp to avoid hydration issues
    }
  ])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  const [accessForm, setAccessForm] = useState<AccessForm>({
    name: '',
    email: '',
    project: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const data = await sendMessage(inputMessage, 'testing')

      if (data.response) {
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: data.response,
          sender: 'ai',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      } else {
        throw new Error('No response from AI')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again in a moment!",
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleAccessSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validation checks
    if (!accessForm.name.trim()) {
      alert('Please enter your full name')
      return
    }
    
    if (!accessForm.email.trim()) {
      alert('Please enter your email address')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(accessForm.email.trim())) {
      alert('Please enter a valid email address')
      return
    }
    
    if (!accessForm.project.trim()) {
      alert('Please tell us about your project')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mgvzlonb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: accessForm.name.trim(),
          email: accessForm.email.trim(),
          project: accessForm.project.trim(),
          _subject: 'New GameLayer Access Request'
        })
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setAccessForm({ name: '', email: '', project: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error('Failed to send request')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send access request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAccessForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <HeroSection />
      <AIChatSection
        messages={messages}
        inputMessage={inputMessage}
        isLoading={isLoading}
        onInputChange={(value) => setInputMessage(value)}
        onSendMessage={handleSendMessage}
        onKeyPress={handleKeyPress}
      />
      <FeaturesSection />
      <FAQSection />
      <AccessSection
        accessForm={accessForm}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        onInputChange={handleInputChange}
        onSubmit={handleAccessSubmit}
      />
    </>
  )
}