import {LightningElement, track, api} from 'lwc';

export default class UnifiedProfileRNNextBestProduct extends LightningElement {
    @api componentTitle = 'Next Best Product';

    @api offerTitle1 = 'Offer 1';
    @api offerDescription1 = 'Amazing info here...';
    @api offerImageUrl1 = 'https://pbs.twimg.com/media/DYZKxc2U0AARzYj.png';
    @api offerButton1 = 'Details';

    @api offerTitle2 = 'Offer 2';
    @api offerDescription2 = 'More amazing info here...';
    @api offerImageUrl2 = 'https://pbs.twimg.com/media/DU8d0FMWsAARZtK.png';
    @api offerButton2 = 'Learn More';

    @api offerTitle3 = 'Offer 3';
    @api offerDescription3 = 'Still more amazing info here...';
    @api offerImageUrl3 = 'https://pbs.twimg.com/media/ELL1MoOUYAEBPyb.png';
    @api offerButton3 = 'Details';
}