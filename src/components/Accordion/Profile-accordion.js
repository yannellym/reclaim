import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
    <h1 className="privacy-title">Control Who Can Find You</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
            1.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> Who can search for me on Reclaim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              ReClaim takes privacy concerns seriously, including when it comes to your search activity.   
              Everyone, except people you've blocked, can search for you and click on your profile, but       
              what they can see about you in search results depends on what's shared with them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>2.</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            How can I adjust my privacy settings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              You can use the Privacy Checkup to review and adjust your settings 
              to make sure you're sharing with who you want. To be sure you continue
              sharing with who you want, we recommend regularly checking the audience
              for your profile information and posts. 
              Your privacy shortcuts also give you quick access to your privacy settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
            3.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           How can I make sure I don't lose access to my ReClaim account? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              If you ever forget your password, you'll want to be prepared ahead of     
              time with a way to get back in to your Facebook account without it. 
              You can use one of several recovery options to prevent getting locked out 
              of your account in the future: Have an up to date way for us to contact you.
              We'll be able to send you a confirmation code to reset your password from a 
              trusted email or mobile phone number. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>4.</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           How do I log out of my ReClaim account? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Click account in the top right of the MarketFeed.
            Click Log Out at the bottom of the menu that appears.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}