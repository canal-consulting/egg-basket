
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageToolkit } from '@backstage/plugin-home';
import { HomePageMarkdown } from '@roadiehq/backstage-plugin-home-markdown';
import { Content, PageWithHeader } from '@backstage/core-components';

export const HomePage = () => {
    return (
        <PageWithHeader title="Home" themeId="home">
            <Content>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <HomePageMarkdown
                            title="Neeews!"
                            owner="RoadieHQ"
                            repo="roadie-backstage-plugins"
                            path=".backstage/home-page.md"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HomePageMarkdown
                            title="History"
                            owner="RoadieHQ"
                            repo="roadie-backstage-plugins"
                            path=".backstage/home-page-test.md"
                            branch="test-two-mdown"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HomePageToolkit
                            tools={[
                                {
                                    label: 'Backstage',
                                    url: 'https://github.com/backstage/backstage',
                                    icon: <></>,
                                },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Content>
        </PageWithHeader>
    );
};
