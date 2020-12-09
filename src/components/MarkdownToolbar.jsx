import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import LinkIcon from '@material-ui/icons/Link';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import styled from 'styled-components';
import '@github/markdown-toolbar-element';

const MarkdownContainer = styled.span`
    padding-left: 5px;
    @media (max-width: 600px) {
        button {
            padding: 0px 1px !important;
        }
    }
`;

const MarkdownToolbar = props => {
    return (
        <MarkdownContainer>
            <markdown-toolbar for="textarea_id" className="markdown">
                <md-bold><IconButton><FormatBoldIcon /></IconButton></md-bold>
                <md-italic><IconButton><FormatItalicIcon /></IconButton></md-italic>
                <md-link><IconButton><LinkIcon /></IconButton></md-link>
                <md-unordered-list><IconButton><FormatListBulletedIcon /></IconButton></md-unordered-list>
                <md-ordered-list><IconButton><FormatListNumberedIcon /></IconButton></md-ordered-list>
            </markdown-toolbar>
        </MarkdownContainer>
    )
}

export default MarkdownToolbar