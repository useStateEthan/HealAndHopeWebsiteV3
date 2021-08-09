import Head from "next/head";
import React, { FC } from "react";
import { MainPageBlock } from "../components/MainPageBlock";
import styles from "../styles/About.module.css";

const about = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name='description' content='Generated by create next app' />
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main>
				<div className={"main-whole-page-container " + styles.whole_about_page}>
					<section className={styles.about_page_first_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={styles.pageTitle}>About us</h2>
								<p className='front-page-section-caps-smaller-message'>Student Organization. Global Impact.</p>
							</div>

							<div className={styles.MainBlockContainer}>
								<MainPageBlock
									containerID='firstMainPageBlock'
									header='McGill University Chapter'
									mainText='It all started from a single club at mcgill, but then it blousemed into something much bigger. We here at heal and hope strive to do important work the best we can. Across the globe.'
									imageSource='/McgillLogo.png'
									imageAlt='Heal And Hope Logo'
									imageID='McGillLogo'
								/>
							</div>
						</div>
					</section>
					<section className={styles.about_page_second_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={styles.pageTitle}>Our Team</h2>
								<p className='front-page-section-caps-smaller-message'>Working Hard. Making It happen.</p>
							</div>
							<div className={styles.MainBlockContainer}>
								<PositionCard Name='Full Name' Position='VP External' />
								<PositionCard Name='Full Name' Position='VP Finance & Funraising' />
								<PositionCard Name='Full Name' Position='VP Communications' />
								<PositionCard Name='Full Name' Position='President' />
								<PositionCard Name='Full Name' Position='VP Internal' />
								<PositionCard Name='Ethan Hodges' Position='VP Media' ProfileImage='/LinkedInProfile.jpeg' />
								<PositionCard Name='Full Name' Position='Secretary' />
								<PositionCard Name='Full Name' Position='Internal Affairs Officer' />
								<PositionCard Name='Full Name' Position='Media Coordinator' />
								<PositionCard Name='Full Name' Position='Student Rep' />
								<PositionCard Name='Full Name' Position='Fundraising Coordinator' />
								<PositionCard Name='Full Name' Position='Finance Officer' />
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};



const PositionCard: FC<{ Name: string; Position: string; ProfileImage?: string }> = ({
	Name,
	Position,
	ProfileImage,
}) => {
	return (
		<div className={styles.PositionCard}>
			{/* <img src={ProfileImage} alt='Profile Image' className={styles.PositionCardImage} /> */}
			<div className={styles.PositionCardText}>
				<h3>{Name}</h3>
				<p>{Position}</p>
			</div>
		</div>
	);
};

export default about;
