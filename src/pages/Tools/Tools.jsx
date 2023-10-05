import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import Examples from "../Examples/Examples";

const Tools = () =>{
    return(
        <>
          <h2>Tools</h2>
            <table border="5" cellSpacing="1">
                <thead>
                    <tr>
                        <th>Tool name</th>
                        <th>Introduced when</th>
                        <th>Advantage</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Git</td>
                        <td>7 April 2005</td>
                        <td>
                            <ol>
                                <li>Good distributed model as each developer gets a local repository with a complete history of commits which makes git fast compared to other VCs.</li>
                                <li>Branching capabilities and merging are easy (as they are cheap), and they have good data integrity.</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>May 29, 2013</td>
                        <td>
                            <ol>
                                <li>Less time is consumed in modernization, code is maintained, and all this is performed economically.</li>
                                <li>Branching capabilities and merging are easy (as they are cheap), and they have good data integrity.</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>Docker</td>
                        <td>2013</td>
                        <td>
                            <ol>
                                <li>Fast deployment, ease of creating new instances, and faster migrations.</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </>
    )
}

export default Tools;