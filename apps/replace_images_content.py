import os
import re

content_map = {
    'MedicalBillingPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose Our Billing Services?</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Maximize revenue collection</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Reduce denial rates significantly</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Ensure compliance with latest coding standards</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Streamlined reporting and analytics</li>
    </ul>
</div>""",
    
    'LaboratoryBillingPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">Laboratory Billing Expertise</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Accurate CPT coding for lab tests</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Fast turnaround for high-volume claims</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Managing complex prior authorizations</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Seamless LIS integration</li>
    </ul>
</div>""",
    
    'MedicalAuditPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">Comprehensive Auditing</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Identify undercoding and overcoding risks</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Ensure OIG and Medicare compliance</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Detailed revenue leakage analysis</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Actionable feedback for providers</li>
    </ul>
</div>""",
    
    'MedicalBillingCodingPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">Certified Coding Excellence</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> AAPC & AHIMA certified coders</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> ICD-10, CPT, and HCPCS mastery</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Regular documentation reviews</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Specialties-specific coding rules applied</li>
    </ul>
</div>""",
    
    'MIPSConsultingPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">MIPS Score Optimization</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Avoid Medicare payment penalties</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Maximize positive payment adjustments</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Custom quality measure selection</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> End-to-end data submission support</li>
    </ul>
</div>""",
    
    'RCMPage.jsx': """<div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
    <h3 className="text-2xl font-semibold mb-4 text-white">End-to-End RCM Solutions</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Patient registration and eligibility</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Charge capture and coding</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Claims submission and tracking</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Payment posting and A/R management</li>
    </ul>
</div>"""
}

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src\pages'

pattern = re.compile(r'<div className="flex justify-center items-center">\s*<img src="/images/[^"]+" alt="[^"]+" className="[^"]+" />\s*</div>', re.DOTALL)

for file_name, new_text in content_map.items():
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = pattern.sub(new_text, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Processed {file_name}")

