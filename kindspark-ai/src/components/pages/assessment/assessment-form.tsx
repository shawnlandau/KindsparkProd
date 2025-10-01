"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const assessmentSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  companySize: z.string().min(1, "Company size is required"),
  industry: z.string().min(2, "Industry is required"),
  currentTools: z.string().optional(),
  monthlyLeads: z.string().min(1, "Monthly leads is required"),
  mainChallenges: z.string().min(10, "Please describe your main challenges"),
  goals: z.string().min(10, "Please describe your goals"),
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
});

type AssessmentFormData = z.infer<typeof assessmentSchema>;

export function AssessmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
  });

  const onSubmit = async (data: AssessmentFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "assessment",
          ...data,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Assessment Submitted Successfully!
            </h2>
            <p className="text-green-700 mb-6">
              Thank you for your submission. Our team will review your information and send you a 
              personalized assessment report within 24 hours.
            </p>
            <p className="text-sm text-green-600">
              If you have any urgent questions, please contact us at{" "}
              <a href="mailto:hello@kindsparkai.com" className="underline">
                hello@kindsparkai.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Tell Us About Your Business
              </CardTitle>
              <p className="text-gray-600 text-center">
                This assessment takes about 5 minutes and helps us provide you with the most accurate analysis.
              </p>
            </CardHeader>
            <CardContent>
              <form
                name="assessment"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="assessment" />
                <div style={{ display: "none" }}>
                  <input name="bot-field" />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-red-700">{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      {...register("companyName")}
                      className="mt-1"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="contactName">Your Name *</Label>
                    <Input
                      id="contactName"
                      {...register("contactName")}
                      className="mt-1"
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contactName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companySize">Company Size *</Label>
                    <select
                      id="companySize"
                      {...register("companySize")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                    {errors.companySize && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companySize.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Input
                      id="industry"
                      {...register("industry")}
                      className="mt-1"
                      placeholder="e.g., Real Estate, Construction, Professional Services"
                    />
                    {errors.industry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentTools">Current Tools & Systems</Label>
                  <Input
                    id="currentTools"
                    {...register("currentTools")}
                    className="mt-1"
                    placeholder="e.g., Salesforce, HubSpot, QuickBooks, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="monthlyLeads">Average Monthly Leads *</Label>
                  <select
                    id="monthlyLeads"
                    {...register("monthlyLeads")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 leads</option>
                    <option value="11-50">11-50 leads</option>
                    <option value="51-100">51-100 leads</option>
                    <option value="100+">100+ leads</option>
                  </select>
                  {errors.monthlyLeads && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.monthlyLeads.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="mainChallenges">What are your main business challenges? *</Label>
                  <Textarea
                    id="mainChallenges"
                    {...register("mainChallenges")}
                    className="mt-1"
                    rows={4}
                    placeholder="Describe the biggest challenges you're facing with lead management, sales processes, or operations..."
                  />
                  {errors.mainChallenges && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mainChallenges.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="goals">What are your main business goals? *</Label>
                  <Textarea
                    id="goals"
                    {...register("goals")}
                    className="mt-1"
                    rows={4}
                    placeholder="What would you like to achieve with AI automation? Increased revenue, better efficiency, etc."
                  />
                  {errors.goals && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.goals.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select range</option>
                      <option value="under-5k">Under $5,000/month</option>
                      <option value="5k-10k">$5,000 - $10,000/month</option>
                      <option value="10k-25k">$10,000 - $25,000/month</option>
                      <option value="25k+">$25,000+/month</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="timeline">Implementation Timeline *</Label>
                    <select
                      id="timeline"
                      {...register("timeline")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months+">6+ months</option>
                    </select>
                    {errors.timeline && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-8 py-6 text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Assessment"}
                  </Button>
            <p className="text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our privacy policy. 
              We&apos;ll never share your information with third parties.
            </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
