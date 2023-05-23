# Algomancy

## Card Search

This is a tool to search through the cards in a card game under development by Caleb Gannon.

In **Algomancy**, players are in an AI world battling to be the last one standing. Updates and more information about gameplay may be found [here](https://calebgannon.com/algomancy/).

### Valid Search Inputs

This search supports both text and REGEX inputs and searches through card name, type, ability, cost, and faction information.

Searches are _case-insensitive_.

1. Text searches utilize 'bag of words' style searching, meaning it searches for each individual word in an input phrase. For example: 'create tokens' would show a card containing 'create 2 tokens' and a card containing 'Destroy all tokens. Create a Fireball 1'

2. Regex may be entered into the search input. Modifiers at the end must be entered alphabetically to be most effective.

### Faction Filtering

There is a button displayed for each faction. The default has all factions active with Faction Filter Setting set to _Include_.

Clicking/tapping a button will deactivate the corresponding faction and filter it out of search results. Deactivated faction buttons will turn gray instead of the faction's representative color.

The _Faction Filter Setting_ displays how cards are filtered based on their factions.

1. **Includes** returns all cards that include at least one of the active factions.

2. **Equals** returns all cards that match the active factions.

## Displaying Ruling Explanations

Several card interactions require special ruling clarifications. Clicking/tapping on a card's image will display whether a card has any ruling clarifications and how/where to request one if needed.
