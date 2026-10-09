// Latest LinkedIn post shown in the Media House hero.
// Newest post goes first in `linkedInPosts`. Each post's `slides` are the
// carousel pages (PDF pages exported as images) and `url` is the direct link
// to the LinkedIn post.

import maithriAvatar from '../assets/mediaHouse/linkedin/maithri-avatar.png';
import brsr1 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-01.jpg';
import brsr2 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-02.jpg';
import brsr3 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-03.jpg';
import brsr4 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-04.jpg';
import brsr5 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-05.jpg';
import brsr6 from '../assets/mediaHouse/linkedin/brsr-water/brsr-water-06.jpg';
import kanmoi1 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-01.jpg';
import kanmoi2 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-02.jpg';
import kanmoi3 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-03.jpg';
import kanmoi4 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-04.jpg';
import kanmoi5 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-05.jpg';
import kanmoi6 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-06.jpg';

export const linkedInPageUrl =
  'https://www.linkedin.com/company/maithriaquatech/posts/?feedView=all';

export const linkedInPosts = [
  {
    id: 'brsr-core-water-fy2026-27',
    author: {
      name: 'Maithri Aquatech',
      followers: '1,878 followers',
      avatar: maithriAvatar,
    },
    title: 'FY 2026\u201327 is the first year of BRSR Core assurance',
    text:
      'All of India\u2019s top 1,000 listed companies need third-party assurance on their ' +
      'BRSR Core numbers \u2014 and water is one of them. From water disclosure to water ' +
      'infrastructure with Meghdoot AWG. \u{1F4A7}',
    slides: [
      { src: brsr1, alt: 'FY 2026\u201327 is the first year of BRSR Core assurance for India\u2019s top 1,000 listed companies' },
      { src: brsr2, alt: 'What gets checked on water: total consumption, intensity, and discharge' },
      { src: brsr3, alt: 'Kuppam, Andhra Pradesh \u2014 one Meghdoot 500 LPD unit replaces tanker supply' },
      { src: brsr4, alt: '500 litres a day, 1,82,500 litres a year, zero bought from outside' },
      { src: brsr5, alt: 'Three questions for your ESG team this quarter' },
      { src: brsr6, alt: 'Maithri Aquatech Meghdoot AWG \u2014 water generated where it is needed' },
    ],
    url: 'https://www.linkedin.com/posts/maithriaquatech_fy-2026-27-is-the-first-year-all-of-india-activity-7513934649711116288-vaau?utm_source=share&utm_medium=member_desktop&rcm=ACoAACECmXcBNXk_ukmPx_o4p_2ww-4u45uWfKU',
  },
  {
    id: 'kanmoi-dubai-launch',
    author: {
      name: 'Maithri Aquatech',
      followers: '1,878 followers',
      avatar: maithriAvatar,
    },
    title: 'A proud milestone for Meghdoot',
    text:
      'KANMOI \u2014 water from air \u2014 launched in Dubai by Kanoo Machinery, ' +
      'built on a 500 LPD Meghdoot. \u{1F4A7}',
    slides: [
      { src: kanmoi1, alt: 'KANMOI launch in Dubai \u2014 ribbon cutting' },
      { src: kanmoi2, alt: 'Meet KANMOI \u2014 500 LPD Meghdoot at the Kanoo Dubai office' },
      { src: kanmoi3, alt: 'Before launch, Kanoo tested the water in-house' },
      { src: kanmoi4, alt: 'Starting at home \u2014 first bottles go to Kanoo employees' },
      { src: kanmoi5, alt: 'A first step, not the final one' },
      { src: kanmoi6, alt: 'The people behind the KANMOI launch' },
    ],
    url: 'https://www.linkedin.com/posts/maithriaquatech_a-proud-milestone-for-meghdoot-activity-7511037074289061888-24Xd?utm_source=share&utm_medium=member_desktop&rcm=ACoAACECmXcBNXk_ukmPx_o4p_2ww-4u45uWfKU',
  },
];
