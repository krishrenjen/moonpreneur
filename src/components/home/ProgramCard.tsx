import BrandButton from "../common/button/BrandButton";

export type Program = {
  name: string;
  description: string;
  img?: string;
  link?: { href: string; label: string };
};

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-64">
      <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
      <p className="text-gray-700 mb-4">{program.description}</p>
      {program.link && (
        <>
          {program.img && (
            <img
              src={program.img}
              alt={program.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <BrandButton variant="secondary" href={program.link.href}>
            {program.link.label}
          </BrandButton>
        </>
      )}
    </div>
  );
}
