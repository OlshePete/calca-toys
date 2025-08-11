export const globalStyles = {
  body: {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    backgroundColor: 'brand.900',
    maxWidth: '100vw',
    overflowX: 'hidden',
    minHeight: '100vh',
  },
  label: {
    fontFamily: 'var(--font--lato)',
    color: 'brand.100',
  },
  main: {
    minHeight: '100dvh',
  },
  a: {
    fontFamily: 'var(--font--lato)',
    textDecoration: 'none',
  },
  nav: {
    '&.chakra-breadcrumb': {
      fontFamily: 'var(--font--lato)',
    },
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
    width: '100vw',
    '& .header-info': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'brand.900',
      height: '38px',
      position: 'relative',
      top: 0,
      left: 0,
      padding: 0,
      minWidth: '100vw',
    },
    '& .header-nav-container': {
      // zIndex:1000,
      minWidth: '100vw',
      backgroundColor: 'rgba(0,0,0,0)',
      position: 'relative',
      top: ['14px', '18px', '34px'],
      left: '-5px',
      height: '77px',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .header-nav': {
        borderRadius: '43px',
        width: 'min(100%, 1170px)',
        // width:'100%',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#E1ECEE',
        // background: ['transparent', 'transparent',  '#E1ECEE'],
      },
      '& .basket-icon': {
        marginRight: '16px',
      },
    },
    // padding: ["8px", "16px", "0 50px"],
  },
  footer: {
    height: '386px',
    padding: '40px 0',
    backgroundColor: 'brand.600',
    display: 'flex',
    '&>div': {
      display: 'flex',
      flexShrink: 1,
    },
    '&>div>.footer-summary': {
      width: ['120px', '160px', '280px'],
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '&>div>.footer-nav': {
      flexGrow: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  '.section': {
    minHeight: '60vh',
    fontFamily: 'var(--font--lato)',
  },
  '.section.fullH': {
    minHeight: '100vh',
  },
  '.product-sm': {
    width: '270px',
    height: '464px',
    display: 'flex',
    borderRadius: '8px',
    flexDirection: 'column',
    color: 'brand.200',
    transition: 'all 0.3s ease', // Плавный переход для всех свойств
    cursor: 'pointer',
  },
  'label.feedback_form_label': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
    fontSize: '14px',
  },
  'label.feedback_form_checkbox,span.chakra-checkbox__label': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 200,
    fontSize: '14px',
    marginLeft: '16px',
  },
  'label.confirm_form_checkbox': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 200,
    fontSize: '14px',
    marginLeft: '16px',
    '& > .chakra-checkbox__control': {
      borderRadius: '100%',
    },
  },
  'span.chakra-checkbox__control': {
    borderColor: '#F49AA5',
    width: '22px',
    height: '22px',
  },
  'span.chakra-checkbox__control[data-checked], span.chakra-checkbox__control[data-hover][data-checked], span.chakra-checkbox__control[data-hover]':
  {
    background: '#F49AA5',
    borderColor: '#F49AA5',
  },
  "span[role='presentation']": {
    color: 'brand.100',
  },
  'p.feedback_form_label.error': {
    position: 'absolute',
    top: '100%',
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
    fontSize: '14px',
    color: 'red !important',
  },
  'textarea.feedback_input': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
    fontSize: '13px',
    width: '100%',
    minHeight: '180px',
    background: 'transparent',
    borderRadius: '20px!important',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    padding: '16px',
    '&:focus-visible': {
      boxShadow: 'none',
      outline: 'none'
    },
  },
  'h3.seo-title': {
    outline: '1px solid red',
    fontFamily: 'var(--font--ts-remarker)',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '120%',
    textTransform: 'uppercase',
    paddingLeft: '16px',
  },
  'input.feedback_input': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
    fontSize: '13px',
    width: '100%',
    height: '44px',
    background: 'transparent',
    borderRadius: '20px!important',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    paddingLeft: '16px',
    color: 'brand.100',
    '&:focus-visible': {
      boxShadow: 'none',
      outline: 'none'
    },
  },
  'a.chakra-button.header-link, button.chakra-button.header-link':{
    outline:'none!important',
    textDecoration:'none!important',
    borderBottom:'4px solid transparent!important',
    '&:hover':{
      outline:'none!important!important',
      borderBottom:'4px solid #90BCE4!important',
      textDecoration:'none!important'
    },
  },
  'button.nav_icon > svg > circle': {
    stroke: '#F49AA5',
  },
  'button.nav_icon > svg > path': {
    fill: '#F49AA5',
  },
  'button.nav_icon.active > svg > circle': {
    fill: '#F49AA5',
  },
  'button.nav_icon.active > svg > path': {
    fill: '#FFF',
  },
  '.chakra-tabs__list > button.chakra-tabs__trigger': {
    fontSize: '12px',
    lineHeight: '8px',
    padding: '14px 0',
    fontFamily: 'var(--font--lato)' + '!important',
    alignItems: 'center',
  },
  'select.chakra-select': {
    fontSize: '14px',
    lineHeight: '8px',
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
  },
  'article.list_item': {
    position: 'relative',
    width: '370px',
    height: '560px',
    '&>img': {
      height: '440px',
      borderRadius: '14px',
      marginBottom: '20px',
    },
    '&>h2': {
      fontSize: '16px',
      fontFamily: 'var(--font--ts-remarker)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0',
      marginBottom: '26px',
      lineHeight: '24px',
      maxHeight: '48px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
    },
    '& span': {
      fontSize: '14px',
      fontFamily: 'var(--font--lato)',
      fontWeight: 400,
    },
  },
  'div.type_name': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 300,
    width: '122px',
    height: '32px',
    borderRadius: '28px',
    background: '#90BCE4',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontFamily: 'var(--font--lato)',
    position: 'absolute',
    left: '16px',
    top: '16px',
  },
  'div.chakra-input__group': {
    fontFamily: 'var(--font--lato)',
    fontWeight: 300,
    fontSize: '12px',
    '&>*': {
      fontFamily: 'var(--font--lato)',
      fontWeight: 300,
      fontSize: '12px',
      borderRadius: '4px',
    },
  },
  'div.react-tel-input': {
    width: "100%"
  },
  'div.alone-poster-wrapper': {
    background: '#90BCE4',
    height: '456px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '14px',
    gap: '16px',
  },
  'div.chakra-select__indicator': {
    transition: ".2s all ease",
    '&[data-state="open"]': {
      transform: 'rotate(180deg)'
    },
  },
  'div.chakra-slider__root':{
    '& .chakra-slider__range':{
      background:'#90BCE4!important'
    },
    '&>.chakra-slider__control>.chakra-slider_thumb':{
      borderWidth:'2px!important',
      borderColor:'red!important',
    },
  },
  'div.chakra-group': {
    border: '2px solid #90BCE4',
    borderRadius: '8px',
    padding: '8px',
    height: '32px',
    '&>div:first-child, &>div:last-child': {
      fontSize: '13px',
      background: 'transparent!important',
      padding: '0!important',
      border: 'none'
    },
    '&>div:first-child': {
    },
    '&>div:last-child': {
      paddingRight: '3px!important'
    },
    '&>input.chakra-input': {
      height: '32px!important',
      paddingRight: '3px!important',
      border: 'none!important',
      outline: 'none!important',
      textAlign: 'end',
    }
  },
  'input.phoneInput': {
    fontFamily: 'var(--font--lato)',
  },
  '.phoneInput:focus-within': {
    borderColor: '#3182ce',
    boxShadow: 'none',
    outline: 'none',
    width: '100%'
  },
  '.contacts_link': {
    outline: 'none',
    fontSize: '14px',
    color: '#F49AA5',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    cursor: 'pointer',
  },
  '.card-special-content': {
    '& > div > h2': {
      color: 'white',
      fontFamily: 'TS Remarker',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '120%',
      textTransform: 'uppercase',
    },
    '& > div > a': {
      width: 'fit-content',
    },
    '& > div > a.chakra-link:hover > *': {
      textDecoration: 'none!important'
    },
    '& button': {
      backgroundColor: '#F49AA5',
      color: 'white',
      fontFamily: 'Lato',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '14px',
      padding: '17px 32px',
      borderRadius: '49px',
      border: 'none',
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#e88994',
      },
    },
  }
};
