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
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className={"main-whole-page-container " + styles.whole_about_page}>
					<section className={styles.about_page_first_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={"subpage_title_font_and_size"}>About us</h2>
								<p className='front-page-section-caps-smaller-message'>Student Organization. Global Impact.</p>
							</div>

							<div className={styles.MainBlockContainer}>
								<MainPageBlock
									containerID='firstMainPageBlock'
									header='McGill University Chapter'
									mainText='It all started from a single club at mcgill, but then it blossomed into something much bigger. We here at heal and hope strive to do important work the best we can. Across the globe.'
									imageSource='/McGillLogo.png'
									imageAlt='Heal And Hope Logo'
									imageID='McGillLogo'
								/>
							</div>
						</div>
					</section>
					<section className={styles.about_page_second_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={"subpage_title_font_and_size"}>Founders</h2>
								<p className='front-page-section-caps-smaller-message'>Where it all started.</p>
							</div>
							<div className={styles.MainBlockContainer}>
								<PositionCard Name='Ghassan Ayoub' Position='Co-Founder' ProfileImage='/gusphoto.JPG' />
								<PositionCard Name='Karma Hayek' Position='Co-Founder' ProfileImage='/KarmaPhoto.jpg' />
								<PositionCard
									Name='Shayla Tran'
									Position='Chief Financial Officer'
									ProfileImage='/VPFinanceAndFundraising.jpeg'
								/>
								<PositionCard
									Name='Ethan Hodges'
									Position='Chief Operating Webmaster'
									ProfileImage='/LinkedInProfile.jpeg'
								/>
							</div>
						</div>
					</section>
					<section className={styles.about_page_second_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={"subpage_title_font_and_size"}>Our Team</h2>
								<p className='front-page-section-caps-smaller-message'>Working Hard. Making It happen.</p>
							</div>
							<div className={styles.MainBlockContainer}>
								<PositionCard Name='Ghassan Ayoub' Position='Co-President' ProfileImage='/gusphoto.JPG' />
								<PositionCard Name='Karma Hayek' Position='Co-President' ProfileImage='/KarmaPhoto.jpg' />
								<PositionCard Name='Lia Loebenberg' Position='VP Communications' ProfileImage='/liaphoto.jpeg' />
								<PositionCard Name='Simone Geggie' Position='VP External' ProfileImage='/simonephoto.jpeg' />
								<PositionCard
									Name='Shayla Tran'
									Position='VP Finance & Fundraising'
									ProfileImage='/VPFinanceAndFundraising.jpeg'
								/>
								<PositionCard Name='Sarah Beydoun' Position='VP Media' ProfileImage='/SarahBeydoun.png' />
								<PositionCard Name='Lynne Aouad' Position='VP Internal' ProfileImage={undefined} />
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
			<img src={ProfileImage} alt='Profile Image' className={styles.PositionCardImage} style={{ objectFit: "cover" }} />
			<div className={styles.PositionCardText}>
				<h3>{Name}</h3>
				<p>{Position}</p>
			</div>
		</div>
	);
};

export default about;
