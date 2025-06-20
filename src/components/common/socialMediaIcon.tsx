export default function SocialMediaIcon({ icon, link }: { icon: string; link: string }) {
  return (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-[#393653] rounded-full p-2 inline-block transition-colors duration-100 hover:bg-white"
    >
    <img
      src={icon}
      alt="Instagram"
      className="w-4 h-4 transition-filter duration-100 filter group-hover:invert group-hover:brightness-90"
    />
    </a>
  )
}