import { Avatar, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import TopCate from '../../topCategories/TopCate';
import Adata from './Adata';
import AboutFeature from './AboutFeature';
import AboutImg from './Aproducts/history.png';

const About = () => {
  const { teamMembers, testimonials } = Adata;

  return (
    <>
      <Container className='py-10'>
        <Typography variant='h3' component="h2" className='text-center mb-8 py-5 text-purple-900'>
          <span className='title md:text-4xl text-2xl md:font-bold font-extrabold'>About Us</span>
        </Typography>
        <Typography variant='body1' component="p" className='text-center mb-12 py-5'>
          Welcome to LHVSBeauty, where your natural beauty is our inspiration. At LHVSBeauty, we believe that true beauty shines from within and our mission is to enhance and celebrate the unique beauty in everyone. We offer a curated selection of high-quality beauty products designed to nourish, protect, and enhance your skin and hair, ensuring you look and feel your best every day.
        </Typography>
        
        <Grid container spacing={4} alignItems="center" className='py-5'>
          <Grid item xs={12} md={6}>
            <Typography variant='h4' component="h2" className='text-center mb-8 py-5 text-purple-900'>
              <span className='font-extrabold text-2xl md:text-4xl'>Our Story</span>
            </Typography>
            <Typography variant='body1' component="p" className='mb-12 py-5 leading-2'>
              LHVSBeauty was founded with a passion for beauty and a commitment to quality. Our journey began with the simple idea that everyone deserves access to products that are not only effective but also safe and ethically produced. We embarked on a mission to source the finest ingredients from around the world, combining traditional wisdom with modern science to create products that deliver visible results and elevate your beauty routine.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={AboutImg} alt="Our Story" style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
          </Grid>
        </Grid>
        
        <Typography variant='h4' component="h2" className='text-center mb-8 py-8 text-purple-900'>
          <span className='font-extrabold text-2xl md:text-4xl'>Our Values</span>
        </Typography>
        <Typography variant='body1' component="p" className='mb-12 py-5'>
          <strong className='text-lg pr-1'>Quality:</strong> We meticulously select and formulate our products with the highest quality ingredients. Every product in our line undergoes rigorous testing to ensure it meets our exacting standards of performance and safety.
          <br /> <br/>
          <strong className='text-lg pr-1'>Sustainability:</strong> We are dedicated to sustainable practices, from eco-friendly packaging to responsible sourcing. We strive to minimize our environmental footprint and contribute to a healthier planet.
          <br /><br/>
          <strong className='text-lg pr-1'>Inclusivity:</strong> Beauty is diverse, and so are we. Our products are designed for all skin types, tones, and textures, celebrating the unique beauty of every individual.
          <br /><br/>
          <strong className='text-lg pr-1'>Transparency:</strong> We believe in honesty and transparency. You deserve to know what goes into the products you use, which is why we provide clear and comprehensive ingredient lists and product information.
        </Typography>
        
        <Typography variant='h4' component="h2" className='text-center mb-8 py-5 text-purple-900'>
          <span className='font-extrabold text-2xl md:text-4xl'>Our Products</span>
        </Typography>
        <Typography variant='body1' component="p" className='mb-12 py-5'>
          <strong>At LHVSBeauty</strong>, we offer a diverse range of beauty products tailored to your needs. From revitalizing skincare to luxurious haircare, our products are crafted to deliver exceptional results. Our collections include:
          <br /><br/>
          <strong className='text-lg pr-1'>Skincare:</strong> Nourishing cleansers, hydrating serums, and rejuvenating masks to keep your skin healthy and glowing.
          <br />
          <strong className='text-lg pr-1'>Haircare:</strong> Shampoos, conditioners, and treatments that restore vitality and shine to your hair.
          <br />
          <strong className='text-lg pr-1'>Body Care:</strong> Indulgent body lotions, scrubs, and oils that pamper your skin and provide a spa-like experience at home.
          <br />
          <strong className='text-lg pr-1'>Makeup:</strong> High-performance cosmetics that enhance your natural beauty with vibrant colors and long-lasting formulas.
        </Typography>

        <Typography variant='h4' component="h2" className='text-center mt-12 mb-8 py-8 text-purple-900'>
          <span className='font-extrabold text-2xl md:text-4xl'>Meet Our Team</span>
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className='transform transition-transform hover:scale-105 hover:shadow-x my-5 mb-10'>
                  <CardContent className='flex flex-col items-center bg-purple-200'>
                    <Avatar alt={member.name} src={member.imageUrl} className='mb-4' sx={{ width: 100, height: 100 }} />
                    <Typography variant='h6' component="h2">
                      {member.name}
                    </Typography>
                    <Typography variant='body2' color="textSecondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography variant='h4' component="h2" className='text-center mt-12 mb-8 py-8 text-purple-900'>
          <span className='font-extrabold text-2xl md:text-4xl'>Customer Testimonials</span>
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className='transform transition-transform hover:scale-105 hover:shadow-xl my-5'>
                <CardContent className='flex flex-col bg-pink-200'>
                  <Typography variant='body1' component="p" className='text-center'>
                    "{testimonial.feedback}"
                  </Typography>
                  <Typography variant='body2' component="p" className='text-center mt-4'>
                    - {testimonial.name}
                  </Typography>
                  <Avatar alt={testimonial.name} src={testimonial.imageUrl} className='mb-4 content-center' sx={{ width: 50, height: 50 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AboutFeature />
      <TopCate />
    </>
  );
};

export default About;
