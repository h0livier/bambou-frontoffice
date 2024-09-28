import menus from "@/../static/menus.json"
import Image from "next/image"
import { MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Home() {

	return (
		<main className="flex-grow">
			<section id="home" className="py-12 bg-[url('/placeholder.svg?he  ight=400&width=800')] bg-cover bg-center text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-4">Le Bambou</h2>
					<p className="mb-8 text-xl">Vous souhaite la bienvenue et un bon appétit</p>
					<Link href="/products">
						<Button className="bg-yellow-500 text-black hover:bg-yellow-400">
							Voir nos produits
						</Button>
					</Link>
				</div>
			</section>

			<section id="menu" className="py-12">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">Nos Menus</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{menus.map((item, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle>{item.label}</CardTitle>
									<CardDescription>{item.indication}</CardDescription>
								</CardHeader>
								<CardContent>
									{item.content.map(c => <p key={c}>{c}</p>)}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="py-12 bg-red-800 text-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2">
							<Image src="/placeholder.svg?height=300&width=400" alt="Restaurant Interior" className="rounded-lg shadow-lg" />
						</div>
						<div className="md:w-1/2">
							<p className="mb-4">Golden Dragon Palace has been serving authentic Chinese cuisine since 1985. Our chefs bring decades of experience and passion to every dish we serve.</p>
							<p>We take pride in using only the freshest ingredients and traditional cooking methods to bring you the true flavors of China.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="py-12">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">Nous Contacter</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">Rendez-nous Visite</h3>
							<div className="space-y-2">
								<p className="flex items-center"><MapPinIcon className="mr-2 h-5 w-5 text-red-800" /> Rue de la station 74, 7060 Soignies</p>
								<p className="flex items-center"><PhoneIcon className="mr-2 h-5 w-5 text-red-800" /> 067 33 12 91</p>
								<p className="flex items-center"><ClockIcon className="mr-2 h-5 w-5 text-red-800" /> Mon-Sun: 11:00 AM - 10:00 PM</p>
							</div>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">Horaires d&aposouverture</h3>
							<div className="space-y-2">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Jour</TableHead>
											<TableHead>Horaire du Midi</TableHead>
											<TableHead>Horaire du soir</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">Dimanche</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Lundi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Mardi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Mercredi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Jeudi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Vendredi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Samedi</TableCell>
											<TableCell>De 12h à 14h</TableCell>
											<TableCell>De 18h à 22h</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}