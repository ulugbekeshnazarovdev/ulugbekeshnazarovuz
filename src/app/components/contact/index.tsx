'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Telegram bot konfiguratsiyasi
const TELEGRAM_BOT_TOKEN = '';
const TELEGRAM_CHAT_ID = '';

// Forma sxemasi
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak",
  }),
  email: z.string().email({
    message: "Noto'g'ri email manzil",
  }),
  phone: z.string().regex(/^[0-9]{9}$/, {
    message: "Telefon raqam 9 ta raqamdan iborat bo'lishi kerak",
  }),
  subject: z.string({
    required_error: 'Iltimos, mavzuni tanlang',
  }),
  message: z.string().min(10, {
    message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak",
  }),
});

// Interface for form values
type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formani yaratish
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  // Telegram botga xabar yuborish
  const sendToTelegram = async (data: FormValues) => {
    const message = `
    Yangi xabar:
    Ism: ${data.name}
    Email: ${data.email}
    Telefon: ${data.phone}
    Mavzu: ${data.subject}
    Xabar: ${data.message}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Xabarni yuborishda xatolik yuz berdi');
    }
  };

  // Formani yuborish
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await sendToTelegram(values);
      toast.success('Xabar yuborildi', {
        description: "Tez orada siz bilan bog'lanamiz.",
      });
      form.reset();
    } catch (error) {
      toast.error('Xatolik', {
        description:
          "Xabarni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-5 mx-auto py-32" id="contact">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  bg-zinc-900/40 backdrop-blur-md border border-white/10 p-5 rounded-xl"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Biz bilan bog'laning</h1>
            <p className="text-lg text-gray-600">
              Sizda savol yoki taklif bormi? Quyidagi formani to'ldiring va tez
              orada siz bilan bog'lanamiz.
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ism</FormLabel>
                <FormControl>
                  <Input placeholder="Ismingizni kiriting" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email manzilingizni kiriting"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Telefon raqamingizni kiriting"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mavzu</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Mavzuni tanlang" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">Umumiy savol</SelectItem>
                    <SelectItem value="support">Texnik yordam</SelectItem>
                    <SelectItem value="sales">
                      Sotuvlar bo'yicha savol
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xabar</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Xabaringizni yozing"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Yuborilmoqda
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Yuborish
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
