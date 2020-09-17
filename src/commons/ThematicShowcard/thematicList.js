import React from 'react';
import ReportIcon from '../../assets/icons/fiscal.svg'
import ExtractiveIcon  from '../../assets/icons/extractive.svg'
import Corruption  from '../../assets/icons/corruption.svg';
import InformationIcon from '../../assets/icons/information.svg';
import Engagement from '../../assets/icons/engagement.svg';
import Inclusiveness from '../../assets/icons/inclusiveness.svg';
import Delivery from '../../assets/icons/delivery.svg';
import Track from '../../assets/icons/track.svg';

const thematicList = [
    {
        title: 'Fiscal Transparency',
        info: 'To ensure more effective citizens’ participation across the entire budget cycle',
        logo:  ReportIcon,
    },
    {
        title: 'Extractive Transparency',
        info: 'Working together with all stakeholders to enhance transparency in the extractive sector',
        logo: ExtractiveIcon
    },
    {
        title: 'Anti-Corruption',
        info: 'To take appropriate actions to implement the National Anti-Corruption Strategy',
        logo: Corruption,
    },
    {
        title: 'Access to information',
        info: 'Improving compliance of public institutions with the Freedom of Information Act (FOIA) ',
        logo:  InformationIcon
    },
    {
        title: 'Citizen Engagement',
        info: 'To implement the Permanent Dialogue Mechanism adopted in the first National Action Plan (NAP)',
        logo: Engagement,
    },
    {
        title: 'Inclusiveness',
        info: 'To Increase the voice and enhance participation of the vulnerable (Women, persons with disabilities e.t.c)',
        logo: Inclusiveness,
    },
    {
        title: 'Service Delivery',
        info: 'Improving the quality of public service delivery  in six pilot through initiatives to improve the performance and results.',
        logo:  Delivery,
    },
    {
        title: 'Track National Action Plan 2 with us',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi orci duis ipsum tortor eget elementum. Sed enim quis.',
        logo: Track,
    },
];

export const commitmentCardList = [
    {
        title: 'Commitment 1',
        description: 'To Ensure More Effective Citizens’ Participation Across The Entire Budget Cycle.'
    },
    {
        title: 'Commitment 6',
        description: 'To Establish A Public Central Register Of Beneficial Owners Of Companies.'
    }
]

export default thematicList;
