import SocialMediaIcon from "./socialMediaIcon";

const footerLinks = [
  {"title": "Moonpreneur", "links": [
    { "name": "About Us", "url": "/about" },
    { "name": "Careers", "url": "/careers" },
    { "name": "Blog", "url": "/blog" }
  ]},
  {"title": "Quick Links", "links": [
    { "name": "Help Center", "url": "/help" },
    { "name": "FAQs", "url": "/faqs" },
    { "name": "Community", "url": "/community" }
  ]},
  {"title": "Resources", "links": [
    { "name": "Privacy Policy", "url": "/privacy" },
    { "name": "Terms of Service", "url": "/terms" }
  ]}
]

export default function Footer(){
  return (
    <footer className="flex flex-col items-center justify-between p-4 bg-[#231F3F] text-white">
      
      
      <div className="flex flex-row items-center justify-between w-8/12">
        {/* Links */}
        <nav>
          <ul className="flex space-x-8">
            {footerLinks.map((section) => (
              <li key={section.title}>
                <h3 className="font-bold">{section.title}</h3>
                <ul className="mt-2 space-y-1">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url} className="hover:underline">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav> 

        {/* Social Media Icons */}
        <div className="flex flex-col items-center justify-start gap-1">
            <h2>Follow us on</h2>
            <div className="flex flex-row items-center justify-start gap-1 w-full">
              <SocialMediaIcon icon="/assets/social_media_icons/instagram.svg" link="https://www.instagram.com/moonpreneur/"/>
              <SocialMediaIcon icon="/assets/social_media_icons/linkedin.svg" link="https://www.instagram.com/moonpreneur/"/>

            </div>
        </div>
      </div>
      
          
      {/* Copyright */}
      <p>©️ {new Date().getFullYear()} Moonpreneur. All rights reserved.</p>
    </footer>
  );
}