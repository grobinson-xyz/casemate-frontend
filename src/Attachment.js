import React from 'react';
import * as AdaptiveCards from "adaptivecards";
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import './Attachment.css';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

var adaptiveCard = new AdaptiveCards.AdaptiveCard();

adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
  fontFamily: "Segoe UI, Helvetica Neue, sans-serif",
  seperator: {
    "lineThickness": 1,
		"lineColor": "#EEEEEE"
  }
  // More host config options
});


const Attachment = ({ content, contentUrl, contentType, name }) => {
  switch (contentType) {
    case 'image/gif':
    case 'image/jpeg':
    case 'image/png':
    case 'image/svg':
    case 'image/svg+xml':
      return <img alt={name} src={contentUrl} />;

    case 'text/markdown':
    case 'text/plain':
      return <p>{content}</p>;

    default:
      if (contentUrl) {
        return (
          <a href={contentUrl} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        );
      } else {
        var my_json = JSON.stringify(content);
        var parsed_obj = JSON.parse(my_json);
        var obj_html = "<div style='margin:0;padding:0;text-align:'left'>" + 
                       "<h2 className='heading' variant='subtitle' style='font-weight:normal;text-align:left'>" +
                        parsed_obj["body"][0]["inlines"][0]["text"] + "</h2>" + 
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px;color:#787878;text-align:left;margin-block-start:0.1em;margin-block-end:0;'>" +
                        parsed_obj["body"][1]["columns"][0]["items"][0]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px;color:#787878;text-align:left;margin-block-start:0.1em;margin-block-end:0;'>" +
                        parsed_obj["body"][1]["columns"][1]["items"][0]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-size:6px;text-align:left'>" +
                        parsed_obj["body"][2]["inlines"][0]["text"] + "</p>" +
                      "<h3 className='heading' variant='subtitle' style='text-align:left;margin-block-end:0;'>" +
                        parsed_obj["body"][3]["text"] + "</h3>" +
                      "<p className='heading' variant='subtitle' style='font-size:6px;text-align:left;margin-block-start:0.1em;'>" +
                        parsed_obj["body"][4]["inlines"][0]["text"] + "</p>" + 
                      "<h3 className='heading' variant='subtitle' style='text-align:left;margin-block-end:0;'}>" +
                        parsed_obj["body"][5]["text"] + "</h3>" +
                      "<p className='heading' variant='subtitle' style='font-size:6px;text-align:left;margin-block-start:0.1em;'>" +
                        parsed_obj["body"][6]["inlines"][0]["text"] + "</p>" + 
                      "<h3 className='heading' variant='subtitle' style='text-align:left;margin-block-end:0;'>" +
                        parsed_obj["body"][7]["text"] + "</h3>" +
                      "<p className='heading' variant='subtitle' style='font-size:6px;text-align:left;margin-block-start:0.1em;'>" +
                        parsed_obj["body"][8]["inlines"][0]["text"] + "</p><br/>" + 
                      "<p className='heading' variant='subtitle' style='font-size:6px;text-align:left;margin-block-end:1.5em;'>" +
                        parsed_obj["body"][10]["text"] + "</p>" + 
                      "<p className='heading' variant='subtitle' style='font-weight:bold;color:#1880E3;text-align:left;margin-block-start:0.1em;margin-block-end:0;'>" +
                        parsed_obj["body"][12]["items"][0]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px;color:#787878; text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][1]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-size:5px; color:#656565;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][2]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-size:5px;color:#656565;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][3]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px; color:#4F4F4F;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][4]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px; color:#4F4F4F;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][5]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px; color:#4F4F4F;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][6]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px; color:#4F4F4F;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][7]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px; color:#000000;text-align:left;margin-block-start:0;margin-block-end:0.2em;'>" +
                        parsed_obj["body"][12]["items"][8]["text"] + "</p>" +
                      "<p className='heading' variant='subtitle' style='font-weight:bold; font-size:5px;color:#1880E3;text-align:left;margin-block-start:0;margin-block-end:0;'>" + '"' + 
                        parsed_obj["body"][12]["items"][9]["text"] + '"' + "</p>" +
                      `<img className='heading' variant='subtitle' src=${parsed_obj["body"][12]["items"][10]["url"]} style="width:65px; height:25px; float:left;"></img><br/>` +
                       "</div>";
        return <Card style={{fontSize:'0.2em', textAlign:'left', fontFamily:'Segoe UI', margin:0, color:'black'}} className="email_card"  >
          <CardHeader gutterBottom title={parsed_obj["body"][0]["inlines"][0]["text"]}/>
  
          <Divider light="true" style={{opacity:'0'}}/>
          <Chip sx={{ fontSize: 5, height:10, marginLeft:'10px' }} size="small" label={parsed_obj["body"][1]["columns"][0]["items"][0]["text"]} variant="outlined" />
                   <Chip sx={{ fontSize: 5, height:10, marginLeft:'5px'}} size="small" label={parsed_obj["body"][1]["columns"][1]["items"][0]["text"]} variant="outlined" />
                   <Divider light="true" style={{opacity:'0'}}/>
                   <Divider light="true" style={{opacity:'0'}}/>
                   <Divider light="true" style={{opacity:'0'}}/>
                   <CardContent>
                  
                    <Typography sx={{ fontSize: 6 }} variant="body2" component="p" className="email_greeting" color="text.secondary" gutterBottom>
                    {parsed_obj["body"][2]["inlines"][0]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 6, fontWeight:'bolder' }}  variant="subtitle2" className="issue_description" color="text.secondary">
                    {parsed_obj["body"][3]["text"]}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 6}} variant="body2" component="p" className="issue_description_text" color="text.secondary">
                    {parsed_obj["body"][4]["inlines"][0]["text"]}
                    </Typography>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Typography sx={{ fontSize: 6, fontWeight:'bolder' }} variant="subtitle2" className="troubleshooting" color="text.secondary">
                    {parsed_obj["body"][5]["text"]}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 6 }} variant="body2" className="troubleshooting_text" color="text.secondary">
                    {parsed_obj["body"][6]["inlines"][0]["text"]}
                    </Typography>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Typography sx={{ fontSize: 6, fontWeight:'bolder' }} variant="subtitle2" className=",action_plan" color="text.secondary">
                    {parsed_obj["body"][7]["text"]}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 6 }} variant="body2" className="action_plan_text" color="text.secondary">
                    {parsed_obj["body"][8]["inlines"][0]["text"]}
                    </Typography>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Typography sx={{ fontSize: 6 }} className="closing_remark" color="text.secondary">
                    {parsed_obj["body"][10]["text"]}
                    </Typography>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Divider light="true" style={{opacity:'0'}}/>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder',color:'#1880E3' }} className="name" color="text.secondary">
                    {parsed_obj["body"][12]["items"][0]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, color:'#787878' }} className="job_title" color="text.secondary">
                    {parsed_obj["body"][12]["items"][1]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, color:'#656565' }} className="product" color="text.secondary">
                    {parsed_obj["body"][12]["items"][2]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, color:'#656565' }} className="department" color="text.secondary">
                    {parsed_obj["body"][12]["items"][3]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#4F4F4F' }} className="phone" color="text.secondary">
                    {parsed_obj["body"][12]["items"][4]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#4F4F4F' }} className="email" color="text.secondary">
                    {parsed_obj["body"][12]["items"][5]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#4F4F4F' }} className="manager" color="text.secondary">
                    {parsed_obj["body"][12]["items"][6]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#4F4F4F' }} className="backup" color="text.secondary">
                    {parsed_obj["body"][12]["items"][7]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#000000' }} className="working_hours" color="text.secondary">
                    {parsed_obj["body"][12]["items"][8]["text"]}
                    </Typography>
                    <Typography sx={{ fontSize: 5, fontWeight:'bolder', color:'#1880E3' }} className="working_hours" color="text.secondary">
                    "{parsed_obj["body"][12]["items"][9]["text"]}"
                    </Typography>
                    <CardMedia
                    component="img"
                    sx={{ width: 50 }}
                    image={parsed_obj["body"][12]["items"][10]["url"]}
                    alt="Paella dish" />
                   </CardContent>
        </Card>
      }
  }
};

// dangerouslySetInnerHTML={{ __html: obj_html}}

export default Attachment;