import { siteContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#46578C]/15 bg-[#FCF5E3] text-[#46578C]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 py-6 text-center">
        <p className="text-xs sm:text-sm font-medium text-[#46578C]/85">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
