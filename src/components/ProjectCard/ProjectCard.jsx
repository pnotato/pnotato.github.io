import './ProjectCard.css';
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({imgsource, alt, title, hreflink}) {
    return (
        <Card className="projectcard">
            <CardCover>
                <img
                    src={imgsource}
                    loading="lazy"
                    alt={alt}
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                    {title}
                </Typography>
                <Typography
                    startDecorator={<GitHubIcon />}
                    textColor="neutral.300"
                >
                    <a className="link" href={hreflink}>View Project</a>
                </Typography>
            </CardContent>
        </Card>
    );
}