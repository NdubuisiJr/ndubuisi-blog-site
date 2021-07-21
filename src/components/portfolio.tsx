import { FunctionComponent } from 'react';
import { Experience } from './experience';

export const Portfolio: FunctionComponent = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="title">
                <h2>Notable Projects and Open source contribution</h2>
                <hr />
            </div>
            <div className="projects">
                <Experience
                    title={'Fluent SMS'}
                    description={
                        'Fluent SMS is a fast and secure application designed for sending bulk SMS to all networks in Nigeria for as low as N2.98 per unit.'
                    }
                    imageUrl={'images/fluentsms.png'}
                    link={
                        'https://play.google.com/store/apps/details?id=com.fluentmessenger.fluentbulksms'
                    }
                />

                <Experience
                    title={'Skia-chart'}
                    description={
                        'A simple xamarin.Forms chart library, built on top of the skiasharp.views.forms library. This library is developed with engineering and statistics in mind. It might not be the prettiest but it will visualize your data appropriately.'
                    }
                    imageUrl={
                        'https://raw.githubusercontent.com/NdubuisiJr/skia-chart/master/ProjectFiles/WPF/radial.JPG'
                    }
                    link={'https://www.nuget.org/packages/SkiaChart.Forms/'}
                />

                <Experience
                    title={'SR Cooperative'}
                    description={'A multiple savings and investment platform.'}
                    imageUrl={'images/srcoo.png'}
                    link={'https://www.srcooperative.com/'}
                />

                <Experience
                    title={'Excel Mapper'}
                    description={
                        'A library to map POCO objects to Excel files.'
                    }
                    imageUrl={'images/excel.jpg'}
                    link={'https://github.com/mganss/ExcelMapper'}
                />

                <Experience
                    title={'Type Extender'}
                    description={
                        'A light-weight (actually contains one class) library that extends any unsealed type at runtime.'
                    }
                    imageUrl={'images/typeExtender'}
                    link={'https://github.com/NdubuisiJr/TypeExtender'}
                />

                <Experience
                    title={'C# ALGORITHMS'}
                    description={
                        'A plug-and-play class-library project of standard Data Structures and Algorithms, written in C#.'
                    }
                    imageUrl={'images/nuget.png'}
                    link={'https://github.com/aalhour/C-Sharp-Algorithms'}
                />
            </div>
        </section>
    );
};
