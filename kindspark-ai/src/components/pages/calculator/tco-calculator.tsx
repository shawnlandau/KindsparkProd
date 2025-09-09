"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Printer } from "lucide-react";

interface CalculatorInputs {
  monthlyLeads: number;
  responseDelay: number;
  closeRate: number;
  averageOrderValue: number;
  manualHours: number;
  hourlyCost: number;
  missedLeads: number;
}

interface CalculatorResults {
  currentLoss: number;
  laborWaste: number;
  totalCost: number;
  aiSavings: number;
  roi: number;
  paybackPeriod: number;
}

export function TCOCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyLeads: 50,
    responseDelay: 2,
    closeRate: 20,
    averageOrderValue: 5000,
    manualHours: 20,
    hourlyCost: 50,
    missedLeads: 15,
  });

  const [results, setResults] = useState<CalculatorResults>({
    currentLoss: 0,
    laborWaste: 0,
    totalCost: 0,
    aiSavings: 0,
    roi: 0,
    paybackPeriod: 0,
  });

  const calculateResults = useCallback(() => {
    const {
      monthlyLeads,
      closeRate,
      averageOrderValue,
      manualHours,
      hourlyCost,
      missedLeads,
    } = inputs;

    // Calculate missed revenue due to slow response
    const missedRevenue = (monthlyLeads * (missedLeads / 100)) * averageOrderValue * (closeRate / 100);
    
    // Calculate labor waste
    const laborWaste = manualHours * hourlyCost * 12; // Annual
    
    // Calculate total current cost
    const totalCost = missedRevenue * 12 + laborWaste;
    
    // AI improvements (conservative estimates)
    const aiResponseImprovement = 0.8; // 80% improvement in response time
    const aiEfficiencyGain = 0.7; // 70% reduction in manual work
    
    // Calculate AI savings
    const aiSavings = (missedRevenue * aiResponseImprovement * 12) + (laborWaste * aiEfficiencyGain);
    
    // Calculate ROI (assuming $5K/month AI cost)
    const monthlyAICost = 5000;
    const annualAICost = monthlyAICost * 12;
    const netSavings = aiSavings - annualAICost;
    const roi = (netSavings / annualAICost) * 100;
    const paybackPeriod = annualAICost / (aiSavings / 12);

    setResults({
      currentLoss: Math.round(missedRevenue * 12),
      laborWaste: Math.round(laborWaste),
      totalCost: Math.round(totalCost),
      aiSavings: Math.round(aiSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  }, [inputs]);

  useEffect(() => {
    calculateResults();
  }, [calculateResults]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const data = {
      inputs,
      results,
      timestamp: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tco-calculator-results.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Your Current Situation</CardTitle>
              <p className="text-gray-600">
                Enter your business metrics to calculate the true cost of inefficiency.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="monthlyLeads">Monthly Leads</Label>
                  <Input
                    id="monthlyLeads"
                    type="number"
                    value={inputs.monthlyLeads}
                    onChange={(e) => handleInputChange('monthlyLeads', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="responseDelay">Response Delay (hours)</Label>
                  <Input
                    id="responseDelay"
                    type="number"
                    value={inputs.responseDelay}
                    onChange={(e) => handleInputChange('responseDelay', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="closeRate">Close Rate (%)</Label>
                  <Input
                    id="closeRate"
                    type="number"
                    value={inputs.closeRate}
                    onChange={(e) => handleInputChange('closeRate', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="averageOrderValue">Average Order Value ($)</Label>
                  <Input
                    id="averageOrderValue"
                    type="number"
                    value={inputs.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="manualHours">Manual Hours/Week</Label>
                  <Input
                    id="manualHours"
                    type="number"
                    value={inputs.manualHours}
                    onChange={(e) => handleInputChange('manualHours', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="hourlyCost">Hourly Cost ($)</Label>
                  <Input
                    id="hourlyCost"
                    type="number"
                    value={inputs.hourlyCost}
                    onChange={(e) => handleInputChange('hourlyCost', Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="missedLeads">Missed Leads Due to Slow Response (%)</Label>
                <Input
                  id="missedLeads"
                  type="number"
                  value={inputs.missedLeads}
                  onChange={(e) => handleInputChange('missedLeads', Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-600">Current Annual Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Missed Revenue:</span>
                    <span className="text-xl font-bold text-red-600">
                      ${results.currentLoss.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Labor Waste:</span>
                    <span className="text-xl font-bold text-red-600">
                      ${results.laborWaste.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Annual Loss:</span>
                      <span className="text-2xl font-bold text-red-600">
                        ${results.totalCost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-600">With AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Savings:</span>
                    <span className="text-xl font-bold text-green-600">
                      ${results.aiSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI:</span>
                    <Badge variant="secondary" className="text-lg">
                      {results.roi}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {results.paybackPeriod} months
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={handlePrint} variant="outline" className="flex-1">
                <Printer className="h-4 w-4 mr-2" />
                Print Results
              </Button>
              <Button onClick={handleExport} variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Stop Losing Money?
            </h3>
            <p className="text-blue-100 mb-6">
              These calculations show conservative estimates. Most businesses see even better results with our AI automation.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <a href="/assessment">Get Your Free Assessment</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
