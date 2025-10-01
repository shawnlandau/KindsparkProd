import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      companySize, 
      industry, 
      currentTools, 
      monthlyLeads, 
      mainChallenges, 
      goals, 
      budget, 
      timeline 
    } = body;

    // Basic validation
    if (!companyName || !contactName || !email || !phone || !companySize || !industry || !monthlyLeads || !mainChallenges || !goals || !budget || !timeline) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Log the assessment form submission
    console.log("Assessment form submission:", {
      companyName,
      contactName,
      email,
      phone,
      companySize,
      industry,
      currentTools,
      monthlyLeads,
      mainChallenges,
      goals,
      budget,
      timeline,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email sending logic
    // Example with a service like Resend:
    /*
    const { data, error } = await resend.emails.send({
      from: 'noreply@kindsparkai.com',
      to: [site.contactEmail],
      subject: `New Assessment Submission: ${companyName}`,
      html: `
        <h2>New Assessment Form Submission</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Current Tools:</strong> ${currentTools || 'Not provided'}</p>
        <p><strong>Monthly Leads:</strong> ${monthlyLeads}</p>
        <p><strong>Main Challenges:</strong></p>
        <p>${mainChallenges.replace(/\n/g, '<br>')}</p>
        <p><strong>Goals:</strong></p>
        <p>${goals.replace(/\n/g, '<br>')}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
      `,
    });
    */

    return NextResponse.json(
      { 
        message: "Assessment form submitted successfully",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Assessment form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
