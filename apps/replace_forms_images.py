import os
import re

pages_info = {
    'MedicalBillingPage.jsx': '/images/medical_billing_hero.png',
    'LaboratoryBillingPage.jsx': '/images/lab_billing_hero.png',
    'MedicalAuditPage.jsx': '/images/medical_audit_hero.png',
    'MedicalBillingCodingPage.jsx': '/images/billing_coding_hero.png',
    'MIPSConsultingPage.jsx': '/images/mips_consulting_hero.png',
    'RCMPage.jsx': '/images/rcm_flow_hero.png',
    'PatientBenefitsEligibilityPage.jsx': None
}

dir_path = r'c:\Users\dell\OneDrive\Desktop\Moiz Projects\TransMEdex04\TransMEdex\apps\web\src\pages'

for file_name, image_path in pages_info.items():
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The forms are usually like <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl p-6 shadow-lg"> ... </form>
    # Sometimes they don't have bg-white (e.g., MedicalBillingCodingPage.jsx has <form onSubmit={handleSubmit} className="mt-8 space-y-4">)
    # Let's match <form onSubmit={handleSubmit}.*?</form> with re.DOTALL
    
    if image_path:
        replacement = f'''<div className="flex justify-center items-center">
                      <img src="{image_path}" alt="{{title}} Illustration" className="rounded-2xl shadow-2xl w-full object-cover max-h-[400px] border border-white/10" />
                    </div>'''
    else:
        # No image for the last one due to quota. We just remove the form.
        replacement = ''
    
    # We replace the form
    pattern = re.compile(r'<form onSubmit={handleSubmit}.*?</form>', re.DOTALL)
    new_content = pattern.sub(replacement, content)
    
    # For PatientBenefitsEligibilityPage.jsx, if we just remove the form, we should change lg:grid-cols-2 to lg:grid-cols-1
    if not image_path:
        new_content = re.sub(r'lg:grid-cols-2', 'lg:grid-cols-1', new_content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Processed {file_name}")
