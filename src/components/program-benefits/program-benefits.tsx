import { GridLayout, Link, TypographyScale } from '@mdb/flora';
import Image from 'components/image';
import { Grid } from 'theme-ui';
import styles from './styles';

export default function ProgramBenefits() {
  function onCTAClick() {
    window.scrollTo({
      top: 800, // TODO: add anchor to FAQ section once that gets merged
      behavior: 'smooth',
    });
  }

  return (
    <section>
      <GridLayout>
        <TypographyScale variant="heading3" sx={styles.ProgramBenefitsTitle}>
          MongoDB for Educators Program Benefits
        </TypographyScale>
        <Grid
          columns={[1, null, null, 3]}
          sx={styles.ProgramBenefitsWidgetsWrapper}
        >
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
              Atlas credit.
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
            <Image src="/academia/community.svg" alt="MongoDB corporate icon" />
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
      <Link linkIcon="arrow" onClick={onCTAClick}>
        Educators Program FAQs
      </Link>
    </section>
  );
}
