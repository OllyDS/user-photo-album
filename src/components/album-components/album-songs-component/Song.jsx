import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const User = ({ song }) => {
    return(
        <Grid>
            <Grid.Row columns={4} centered>
                <Grid.Column>
                    <Image src={song.image} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={song.image} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={song.image} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={song.image} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default User