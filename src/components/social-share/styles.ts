import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_DARK_PRIMARY, COLOR_WHITE } from 'styles/variables';

const SocialShareWrapper: ThemeUICSSObject = {
  display: 'flex',
  gridColumn: 'span 7',
};

const SocialShareIcon: ThemeUICSSObject = {
  marginRight: ['14px', null, null, '16px'],
};

const CopyLinkWrapper: ThemeUICSSObject = {
  position: 'relative',
  'button': {
    outline: 'none',
    border: 'none',
    background: 'transparent'
  }
};

const CopyLinkTooltip: ThemeUICSSObject = {
  position: 'absolute',
  zIndex: 10,
  top: '28px',
  left: '-4px',
};

const CopyLinkTooltipArrow: ThemeUICSSObject = {
  width: 0,
  marginLeft: 'inc20',
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderBottom: `8px solid ${COLOR_DARK_PRIMARY}`,
};

const CopyLinkTooltipBody: ThemeUICSSObject = {
  background: COLOR_DARK_PRIMARY,
  color: COLOR_WHITE,
  borderRadius: 'inc20',
  padding: ['inc10', null, null, 'inc20'],
  fontSize: ['inc00', null, null, 'inc10'],
  lineHeight: ['inc10', null, null, 'inc20'],
  width: 'max-content',
  boxShadow: 'level01',
};

const styles = {
  SocialShareIcon,
  SocialShareWrapper,
  // Tooltip stuff
  CopyLinkWrapper,
  CopyLinkTooltip,
  CopyLinkTooltipBody,
  CopyLinkTooltipArrow,

};

export default styles;
