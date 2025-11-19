// Common types used by both frontend and backend
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  currency: 'INR';
  monthlySalary: number;
  salaryDate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  description: string;
  category: TransactionCategory;
  type: 'income' | 'expense';
  date: Date;
  paymentMethod: 'upi' | 'cash' | 'card' | 'bank_transfer';
  upiApp?: 'google_pay' | 'phonepe' | 'paytm';
  isRecurring: boolean;
  recurringType?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  createdAt: Date;
  updatedAt: Date;
}

export type TransactionCategory = 
  | 'food'
  | 'transport'
  | 'shopping'
  | 'entertainment'
  | 'bills'
  | 'healthcare'
  | 'education'
  | 'investment'
  | 'salary'
  | 'bonus'
  | 'other';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}