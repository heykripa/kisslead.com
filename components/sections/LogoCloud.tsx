import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function LogoCloud() {
	return (
		<div className="w-full bg-background pt-20 pb-12">
			<div className="container mx-auto px-6 mb-8">
				<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60 text-center">
					Trusted by industry leaders
				</p>
			</div>
			<div className="relative overflow-hidden">
				{/* Faded edges */}
				<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
				<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
				
				<InfiniteSlider gap={80} reverse speed={40}>
					{logos.map((logo) => (
						<div key={`logo-${logo.alt}`} className="flex items-center justify-center px-4">
							<img
								alt={logo.alt}
								className="h-20 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none pointer-events-none"
								height="80"
								loading="lazy"
								src={logo.src}
							/>
						</div>
					))}
				</InfiniteSlider>
			</div>
		</div>
	);
}

const logos = [
	{
		src: "/client-logos/bump-to-born.png",
		alt: "Bump To Born",
	},
	{
		src: "/client-logos/casa-prospect.png",
		alt: "Casa Prospect",
	},
	{
		src: "/client-logos/coimbatore-media-zone.png",
		alt: "Coimbatore Media Zone",
	},
	{
		src: "/client-logos/design-bees.png",
		alt: "Design Bees",
	},
	{
		src: "/client-logos/gnk-real-estate.png",
		alt: "GNK Real Estate",
	},
	{
		src: "/client-logos/livin-interiors.png",
		alt: "Livin Interiors",
	},
	{
		src: "/client-logos/pvs-hardwares.png",
		alt: "PVS Hardwares",
	},
	{
		src: "/client-logos/q2-builders.png",
		alt: "Q2 Builders",
	},
	{
		src: "/client-logos/razzy-baby-studio.png",
		alt: "Razzy Baby Studio",
	},
	{
		src: "/client-logos/true-bio.png",
		alt: "True Bio",
	},
];
