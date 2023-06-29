import Head from 'next/head';
import { Button, GridLayout, TypographyScale } from '@mdb/flora';

import faqData from 'data/FAQs/phd-fellowship';

import Accordion from 'components/accordion';
import {
  PHD_FELLOWSHIP_FIELDS,
  submitPhdFellowshipForm,
} from 'components/form/utils';
import { FormState } from 'components/form/types';

import styles from 'styles/phd-fellowship';

export default function PhdFellowship({
  setFormState,
}: {
  setFormState: (form: FormState) => void;
}) {
  const onFieldChange = (value: string, field: string) => {
    // Hide the "State" field in any non-US countries: UP-6077
    if (field === 'country') {
      if (value === 'United States') {
        setFormState(defaultFormState);
      } else {
        setFormState({
          ...defaultFormState,
          fields: PHD_FELLOWSHIP_FIELDS.map(field =>
            field.name === 'state' ? { ...field, hidden: true } : field
          ),
        });
      }
    }
  };

  const defaultFormState = {
    isOpen: true,
    fields: PHD_FELLOWSHIP_FIELDS,
    multiFileUpload: true,
    texts: {
      title: 'MongoDB PhD Fellowship Program',
      subtitle: 'Application Form',
      postSubmissionTitle: 'Application Submitted',
      postSubmissionDescription:
        'Thank you for submitting your application, we look forward to reviewing it',
      postSubmissionButtonText: 'Close',
      button: 'Submit',
      attachments:
        'Upload your CV, Research Summary and Transcripts (undergraduate and graduate)',
    },
    onFieldChange,
    submitForm: submitPhdFellowshipForm,
  };

  const renderForm = () => setFormState(defaultFormState);

  return (
    <>
      <Head>
        <title>PhD Fellowship Program | MongoDB</title>
        <link
          rel="canonical"
          href="https://www.mongodb.com/academia/phd-fellowship"
        />
        <meta
          name="description"
          content="The MongoDB PhD Fellowship is an exciting new opportunity for PhD candidates to receive funding and recognition for innovative computer science research."
        />
      </Head>
      <header sx={styles.HeroWrapper}>
        <TypographyScale inverse variant="heading2" customElement="h1">
          MongoDB PhD Fellowship Program
        </TypographyScale>
        <Button onClick={renderForm}>Apply Now</Button>
      </header>
      <GridLayout>
        <main sx={styles.Main}>
          <section sx={styles.Section}>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                About the Fellowship
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                MongoDB created its PhD Fellowship to support exceptional PhD
                candidates who want to make significant contributions to the
                future of computer science or related fields. The Fellowship
                provides an opportunity for PhD candidates of all backgrounds to
                conduct computer science research, connect with MongoDB
                engineers, and attend and present research at MongoDB events.
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">Description</TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                The Fellowship includes an award of up to $50,000. The award
                will be given to universities to be distributed to recipients.
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">Eligibility</TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                Applicants must be enrolled in a PhD program for the duration of
                the Fellowship. They must also demonstrate a strong research
                background, passion for computer science or related fields, and
                excellent communication and interpersonal skills.
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">How to Apply</TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                <span>
                  To apply, please complete this{' '}
                  <button
                    type="button"
                    onClick={renderForm}
                    sx={styles.TextBtn}
                  >
                    form
                  </button>{' '}
                  and provide the following information and documents:
                </span>
                <ol sx={styles.OrderedList}>
                  <li>Your CV with links to website and publications</li>
                  <li>
                    Link to your advisor’s research and contact information
                  </li>
                  <li>
                    Research summary including references (maximum two pages of
                    text plus references with font no smaller than 10-point)
                  </li>
                  <li>Undergraduate and graduate transcripts</li>
                </ol>
                <span sx={styles.InfoSectionText}>
                  In addition, applicants must request one letter of
                  recommendation from their doctoral advisor. Recommenders must
                  submit their letters of recommendation and contact information
                  (phone and university address) to{' '}
                  <a
                    href="mailto:phdfellowship@mongodb.com"
                    sx={styles.EmailLink}
                  >
                    phdfellowship@mongodb.com
                  </a>{' '}
                  with the applicant’s name in the subject line.
                </span>
                <span>Incomplete applications will not be reviewed.</span>
              </TypographyScale>
            </div>
            <div sx={styles.InfoSection}>
              <TypographyScale variant="heading4">
                Application Process
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                Applications are accepted on a rolling basis. After applicants
                receive confirmation that MongoDB received their application,
                they will get a response about whether they are selected as
                Fellows within 60 days.
              </TypographyScale>
              <TypographyScale variant="body1" sx={styles.InfoSectionText}>
                At our discretion, MongoDB may request a virtual interview to
                discuss the application before selecting the recipient of the
                Fellowship.
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
