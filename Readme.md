# Grandcentrix Tech Radar

## What is the Tech Radar?

The Tech Radar is a list of technologies, complemented by an assessment result, called ring assignment. We use four rings with the following semantics:
* __ADOPT__ — Technologies we have high confidence in to serve our purpose, also in large
                scale. Technologies with a usage culture in our Grandcentrix production environment, low risk and
                recommended being widely used
* __TRIAL__ — Technologies that we have seen work with success in project work to solve a
                real problem; first serious usage experience that confirm benefits and can uncover limitations. TRIAL
                technologies are slightly more risky; some engineers in our organization walked this path and will share
                knowledge and experiences.
* __ASSESS__ — Technologies that are promising and have clear potential value-add for us;
                technologies worth to invest some research and prototyping efforts in to see if it has impact. ASSESS
                technologies have higher risks; they are often brand new and highly unproven in our organisation. You
                will find some engineers that have knowledge in the technology and promote it, you may even find teams
                that have started a prototyping effort
* __HOLD__ — Technologies not recommended being used for new projects. Technologies that we
                think are not (yet) worth to (further) invest in. HOLD technologies should not be used for new projects,
                but usually can be continued for existing projects.

## Contribute
Contribution is quite simple, you can add your contribution to the ``config.js`` file. Add another entry to the `entries`
array like so:
```json
{
    label: "Kotlin",
    quadrant: Quadrants.LANGUAGES,
    ring: Rings.ADOPT,
    moved: Moved.STEADY
}
```
And it will be shown within the radar. 

Beside adding new technologies to the radar, feel free to make changes to the radar page.

After adding your contribution open a Pull Request to give others a fair chance to discuss your change.
