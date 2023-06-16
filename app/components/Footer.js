export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const currentYear = getCurrentYear();

  return (
    <div className="bg-[#F5F5F7] text-2xs md:text-xs md:text-center p-3 md:p-5">
      <p>{`Copyright © ${currentYear} Apple Inc. All rights reserved.`}</p>
    </div>
  );
}
