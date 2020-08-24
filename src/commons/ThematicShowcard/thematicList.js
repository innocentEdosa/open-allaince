import React from 'react';
import { ReactComponent as ReportIcon } from '../../assets/icons/fiscal.svg'
import { ReactComponent as ExtractiveIcon } from '../../assets/icons/extractive.svg'
import { ReactComponent as CorruptionIcon } from '../../assets/icons/corruption.svg';
import { ReactComponent as InformationIcon } from '../../assets/icons/information.svg';
import { ReactComponent as Engagement } from '../../assets/icons/engagement.svg';
import { ReactComponent as Inclusiveness } from '../../assets/icons/inclusiveness.svg';
import { ReactComponent as Delivery } from '../../assets/icons/delivery.svg';
import { ReactComponent as Track } from '../../assets/icons/track.svg';

const thematicList = [
    {
        heading: 'Fiscal Transparency',
        description: 'To ensure more effective citizens’ participation across the entire budget cycle',
        icon:  <ReportIcon />,
    },
    {
        heading: 'Extractive Transparency',
        description: 'Working together with all stakeholders to enhance transparency in the extractive sector',
        icon: <ExtractiveIcon />
    },
    {
        heading: 'Anti-Corruption',
        description: 'To take appropriate actions to implement the National Anti-Corruption Strategy',
        icon: <CorruptionIcon />
    },
    {
        heading: 'Access to information',
        description: 'Improving compliance of public institutions with the Freedom of Information Act (FOIA) ',
        icon: <InformationIcon />
    },
    {
        heading: 'Citizen Engagement',
        description: 'To implement the Permanent Dialogue Mechanism adopted in the first National Action Plan (NAP)',
        icon: <Engagement />
    },
    {
        heading: 'Inclusiveness',
        description: 'To Increase the voice and enhance participation of the vulnerable (Women, persons with disabilities e.t.c)',
        icon: <Inclusiveness />
    },
    {
        heading: 'Service Delivery',
        description: 'Improving the quality of public service delivery  in six pilot through initiatives to improve the performance and results.',
        icon: <Delivery />
    },
    {
        heading: 'Track National Action Plan 2 with us',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi orci duis ipsum tortor eget elementum. Sed enim quis.',
        icon: <Track />
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
