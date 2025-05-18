
import React from 'react';
import CourseHero from '../components/CourseHero';
import CourseBenefits from '../components/CourseBenefits';
import CourseSkills from '../components/CourseSkills';
import CourseModules from '../components/CourseModules';
import CourseAudience from '../components/CourseAudience';
import CourseInstructor from '../components/CourseInstructor';
import CourseGuarantee from '../components/CourseGuarantee';
import CourseFooter from '../components/CourseFooter';
import CourseBenefitsExtended from '../components/CourseBenefitsExtended';
import CourseFaq from '../components/CourseFaq';

const Index = () => {
  // Images for the course - adjust paths as needed
  const mainImage = "/lovable-uploads/a4610110-2a37-4042-b397-703230d5f535.png"; // Main course image
  
  // Module images
  const moduleImages = [
    "/lovable-uploads/8a00f44c-1590-40a2-a119-7b0df95f3e47.png", // Boas-Vindas
    "/lovable-uploads/f624eeba-e002-427e-b5f4-44b726706748.png", // IA Fundamentos
    "/lovable-uploads/a9efd433-d816-479f-81b1-229f6944ffa4.png", // Make/Integromat
    "/lovable-uploads/d880f198-128d-44e6-99fd-046e558499ee.png", // Infraestrutura Docker
    "/lovable-uploads/4899ba64-4ef5-46bf-b7de-7ef1ee8dd042.png", // WhatsApp com n8n
    "/lovable-uploads/44cde09d-4400-4d95-9fd6-63e3a89923d6.png", // Agentes de IA
    "/lovable-uploads/dce205b9-def1-4991-bc22-e15e7e806d1a.png", // Inteligência de Mercado
    "/lovable-uploads/e55c5eb6-8d5f-4132-94d9-375fa4e66571.png", // Automação E-commerce
  ];

  return (
    <div className="bg-cyber-dark text-cyber-light min-h-screen">
      {/* Hero Section */}
      <CourseHero mainImage={mainImage} />
      
      {/* Benefits Section */}
      <CourseBenefits />
      
      {/* Extended Benefits Section */}
      <CourseBenefitsExtended />
      
      {/* Skills Section */}
      <CourseSkills />
      
      {/* Modules Section */}
      <CourseModules moduleImages={moduleImages} />
      
      {/* Audience Section */}
      <CourseAudience />
      
      {/* FAQ Section */}
      <CourseFaq />
      
      {/* Instructor Section */}
      <CourseInstructor />
      
      {/* Guarantee Section */}
      <CourseGuarantee />
      
      {/* Footer with CTA */}
      <CourseFooter />
    </div>
  );
};

export default Index;
