"use client";
import Signup from '@/components/auth/Signup'
import React from 'react'

function SignupPage() {
  return (
    <div><Signup onBack={() => {}} onSwitchToLogin={() => {}} /></div>
  )
}

export default SignupPage