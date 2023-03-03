import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Description, Image, Link, YouCode } from "./styled";
import { Wrapper } from "./styled";
import image from "./Marianna.jpg";


export default () => (
	<Container>
		<Header title="O autorze" />
		<Section
			title="Marianna Weychan"
			body={
				<>
					<Wrapper>
						<Image
							height={150}
							src={image}
							alt="Zdjęcie Marianna"
						/>
						<Description>
							<strong>Poznanianka</strong> od urodzenia, <strong>sportowiec</strong> z zamiłowania,
							<strong> kulturoznawca i trener personalny</strong> z wykształcenia💪🏻.
							Pełna życia i uśmiechu pasjonatka poezji śpiewanej, historii starożytnej oraz świadomego odżywiania.
							Niniejsza aplikacja została utworzona w trakcie nauki w szkole programowania <strong><YouCode>YouCode</YouCode></strong> podczas kursu: <strong>
								<Link
									target="_blank"
									rel="noopener noreferrer"
									href="https://youcode.pl/zostawiam-maila/"
								>
									Frontend Developer od podstaw,
								</Link>
							</strong> którą podjęłam w związku z realizacją kolejnego marzenia, jakim jest zostanie <strong>programistą Frontend👩🏼‍💻</strong>.
							Miłego dnia! Uśmiechnij się 🙂.
						</Description>
					</Wrapper>
				</>
			}
		/>
	</Container>
);