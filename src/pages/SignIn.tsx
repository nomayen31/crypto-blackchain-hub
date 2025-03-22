
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

// Create form schema with zod
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters',
  }),
  rememberMe: z.boolean().default(false),
});

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Show success toast
    toast({
      title: "Sign in attempted",
      description: "This is a demo. Authentication would happen here.",
    });
    
    // In a real app, you would authenticate the user here
    // For now, just redirect to home after a mock "sign in"
    setTimeout(() => navigate('/'), 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">CB</span>
            </div>
          </a>
          <h1 className="mt-6 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-400">Sign in to your CryptoBlock account</p>
        </div>

        <GlassCard className="backdrop-blur-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          className="pl-10" 
                          {...field} 
                        />
                      </FormControl>
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          className="pl-10" 
                          {...field} 
                        />
                      </FormControl>
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <button 
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? 
                          <EyeOff className="w-5 h-5" /> : 
                          <Eye className="w-5 h-5" />
                        }
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium text-gray-300">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <a href="#" className="text-sm text-crypto-blue hover:text-crypto-blue/80">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-crypto-blue hover:bg-crypto-blue/90"
              >
                Sign In
              </Button>
              
              <div className="text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <a href="/sign-up" className="text-crypto-blue hover:text-crypto-blue/80 font-medium">
                  Sign up
                </a>
              </div>
            </form>
          </Form>
        </GlassCard>
      </div>
    </div>
  );
};

export default SignIn;
