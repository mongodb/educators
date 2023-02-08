import { GridLayout, Link, TypographyScale } from '@mdb/flora';
import Image from 'components/image';
import { Grid } from 'theme-ui';
import styles from './styles';

export default function ProgramBenefits() {
  function onCTAClick() {
    // Yes, querying the DOM is frowned upon in React, but its way less cumbersome than wrapping this component in forwardRef for one small interaction
    const faqSection = document.getElementById('faq-section');

    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section sx={styles.ProgramBenefitsWrapper}>
      <TypographyScale variant="heading3" sx={styles.ProgramBenefitsTitle}>
        MongoDB for Educators Program Benefits
      </TypographyScale>
      <div sx={styles.ProgramBenefitsWidgetWrapper}>
        <GridLayout sx={{ rowGap: 0 }}>
          <Grid columns={[1, null, 3]} sx={styles.ProgramBenefitsGrid}>
            <div sx={styles.ProgramBenefitsWidget}>
              <Image
                src="/academia/atlas-credits.svg"
                alt="MongoDB corporate icon"
              />
              <TypographyScale
                variant="heading6"
                sx={styles.ProgramBenefitsWidgetTitle}
              >
                Get $500 of Atlas Credits
              </TypographyScale>
              <TypographyScale
                variant="body2"
                sx={styles.ProgramBenefitsWidgetSubtitle}
              >
                Explore our multi-cloud developer platform with $500 of MongoDB
                Atlas credits.
              </TypographyScale>
            </div>
            <div sx={styles.ProgramBenefitsWidget}>
              <Image
                src="/academia/certifications.svg"
                alt="MongoDB corporate icon"
              />
              <TypographyScale
                variant="heading6"
                sx={styles.ProgramBenefitsWidgetTitle}
              >
                Free Certifications
              </TypographyScale>
              <TypographyScale
                variant="body2"
                sx={styles.ProgramBenefitsWidgetSubtitle}
              >
                Through our educator program, you will be eligible for free
                MongoDB certification.
              </TypographyScale>
            </div>
            <div sx={styles.ProgramBenefitsWidget}>
              <Image
                src="/academia/community.svg"
                alt="MongoDB corporate icon"
              />
              <TypographyScale
                variant="heading6"
                sx={styles.ProgramBenefitsWidgetTitle}
              >
                Community
              </TypographyScale>
              <TypographyScale
                variant="body2"
                sx={styles.ProgramBenefitsWidgetSubtitle}
              >
                Connect with our global educator community through our educator
                forum and exclusive events for educators.
              </TypographyScale>
            </div>
          </Grid>
        </GridLayout>
      </div>
      <Link
        sx={styles.ProgramBenefitsCTA}
        linkIcon="arrow"
        onClick={onCTAClick}
      >
        Educators Program FAQs
      </Link>
    </section>
  );
}
