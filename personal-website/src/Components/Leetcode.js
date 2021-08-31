import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-html'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus,atomDark,darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import "../Styles/Leetcode.css"

//import filepath from './a.md'

class Markdown extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        filepath : props.filepath,
        markdown: null 
    }
    
  }

  componentDidMount() {
    fetch(this.props.filepath).then((response) => response.text()).then((text) => {
        this.setState({ markdown: text });
      })
  }

  render() {
    return (
      <div className="markdown_content">
        <ReactMarkdown
            children={this.state.markdown}
            
            remarkPlugins={[remarkGfm]}
            components={{
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={darcula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
                ) : (
                <code className={className} {...props}>
                    {children}
                </code>
                )
            }
            }}
        />,
      </div>
    )
  }
}export default Markdown;
