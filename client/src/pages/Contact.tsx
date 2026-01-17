import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import SEO from "@/components/SEO";
import { Mail, Globe, Send, CheckCircle, Loader2 } from "lucide-react";

const contactFormSchema = insertContactSchema.extend({});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-nostra-dark">
      <SEO
        title="Contact | Nostra Group"
        description="Get in touch with Nostra Group. Whether you're a founder thinking about what's next or an owner looking for operational support, we'd like to hear from you."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-nostra-light tracking-tight" data-testid="text-contact-title">
                Get in Touch
              </h1>
              <div className="mt-8 space-y-6">
                <p className="text-lg text-nostra-light/80 leading-relaxed" data-testid="text-contact-intro-1">
                  Whether you're a founder thinking about what's next, an owner looking for operational support, or an intermediary with a relevant opportunity — we'd like to hear from you.
                </p>
                <p className="text-lg text-nostra-light/80 leading-relaxed" data-testid="text-contact-intro-2">
                  We respond to every serious inquiry. If there's a fit, you'll hear back quickly. If not, we'll tell you that too.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4" data-testid="contact-info-email">
                  <div className="w-10 h-10 rounded-md bg-nostra-light/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-nostra-light/80" />
                  </div>
                  <div>
                    <p className="text-sm text-nostra-light/60 mb-1">Email</p>
                    <a
                      href="mailto:info@nostragroup.com"
                      className="text-nostra-light transition-colors"
                      data-testid="link-contact-email"
                    >
                      info@nostragroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4" data-testid="contact-info-website">
                  <div className="w-10 h-10 rounded-md bg-nostra-light/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-nostra-light/80" />
                  </div>
                  <div>
                    <p className="text-sm text-nostra-light/60 mb-1">Website</p>
                    <a
                      href="https://www.nostragroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nostra-light transition-colors"
                      data-testid="link-contact-website"
                    >
                      www.nostragroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-nostra-light/5 border border-nostra-light/10 rounded-md p-8 lg:p-12 text-center" data-testid="contact-success-message">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-nostra-light mb-4" data-testid="text-success-title">
                    Message Sent
                  </h3>
                  <p className="text-nostra-light/70 leading-relaxed" data-testid="text-success-message">
                    Thank you for reaching out. We'll review your message and get back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-8 border-nostra-light/20 text-nostra-light"
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-nostra-light/5 border border-nostra-light/10 rounded-md p-8 lg:p-12 space-y-6"
                    data-testid="form-contact"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-nostra-light/90">Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-nostra-light/5 border-nostra-light/20 text-nostra-light placeholder:text-nostra-light/40"
                              placeholder="Your name"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-nostra-light/90">Email *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-nostra-light/5 border-nostra-light/20 text-nostra-light placeholder:text-nostra-light/40"
                              placeholder="you@company.com"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-nostra-light/90">
                            Company <span className="text-nostra-light/50">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value || ""}
                              className="bg-nostra-light/5 border-nostra-light/20 text-nostra-light placeholder:text-nostra-light/40"
                              placeholder="Your company"
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-nostra-light/90">How can we help? *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              className="bg-nostra-light/5 border-nostra-light/20 text-nostra-light placeholder:text-nostra-light/40 resize-none"
                              placeholder="Tell us about your business and what you're looking for..."
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-nostra-navy-military text-nostra-light font-semibold"
                      data-testid="button-submit-contact"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
