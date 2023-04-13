import { Button, GridLayout, TypographyScale } from "@mdb/flora";
import Accordion from "components/accordion";

import faqData from 'data/FAQs/phd-fellowship';

import styles from 'styles/phd-fellowship';

export default function PhdFellowship() {
  return (
    <>
      <header sx={styles.HeroWrapper}>
        <TypographyScale inverse variant="heading2">
          MongoDB PhD Fellowship Program
        </TypographyScale>
        <Button onClick={() => alert('Form to be implemented')}>
          Apply Now
        </Button>
      </header>
      <GridLayout>
        <main sx={styles.Main}>
          <section sx={styles.Section}>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                About the Fellowship
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                MongoDB created its PhD Fellowship to support exceptional PhD candidates who want to make significant contributions to the future of computer science or related fields. The Fellowship provides an opportunity for PhD candidates of all backgrounds to conduct computer science research, connect with MongoDB engineers, and attend and present research at MongoDB events.
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                Description
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                The Fellowship includes an award of up to $50,000. The award will be given to universities to be distributed to recipients. 
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                Eligibility
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                Applicants must be enrolled in a PhD program for the duration of the Fellowship. They must also demonstrate a strong research background, passion for computer science or related fields, and excellent communication and interpersonal skills.
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                How to Apply
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                <span>To apply, please complete this <button type="button" onClick={() => alert('Form to be implemented')} sx={styles.TextBtn}>form</button> and provide the following information and documents:</span>
                <ol sx={styles.OrderedList}>
                  <li>Your CV with links to website and publications</li>
                  <li>Link to your advisor’s research and contact information</li>
                  <li>Research summary including references (maximum two pages of text plus references with font no smaller than 10-point)</li>
                  <li>Undergraduate and graduate transcripts</li>
                </ol>
                <span sx={styles.InfoSectionText}>In addition, applicants must request one letter of recommendation from their doctoral advisor. Recommenders must submit their letters of recommendation and contact information (phone and university address) to <a href="mailto:phdfellowship@mongodb.com" sx={styles.EmailLink}>phdfellowship@mongodb.com</a> with the applicant’s name in the subject line.</span>
                <span>Incomplete applications will not be reviewed.</span>
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                Application Process
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                Applications are accepted on a rolling basis. After applicants receive confirmation that MongoDB received their application, they will get a response about whether they are selected as Fellows within 60 days.
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
              At our discretion, MongoDB may request a virtual interview to discuss the application before selecting the recipient of the Fellowship.
              </TypographyScale>
            </div>
          </section>
          <section>
            <TypographyScale variant="heading4" sx={styles.FAQTitle}>
              FAQ
            </TypographyScale>
            {faqData.map(({ title, body }) => (
              <Accordion
                key={title}
                title={title}
                body={body}
                wrapperStyles={styles.FAQStyles}
              />
            ))}
          </section>
        </main>
      </GridLayout>
    </>
  );
}
