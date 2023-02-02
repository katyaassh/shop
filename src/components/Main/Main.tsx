import { Banner } from './Banner/Banner';
import { SpecialOffers } from './SpecialOffers/SpecialOffers';
import { AboutCompany } from './AboutCompany/AboutCompany';

export const Main = (): JSX.Element => {
    return (
        <div className='container'>
            <Banner />
            <SpecialOffers />
            <AboutCompany />
        </div>
    );
};
