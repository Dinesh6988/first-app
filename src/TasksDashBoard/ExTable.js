import React from 'react';
import './ExTable.scss';
const ExTable = () => {
      return(
        <> 
      <table width={"100%"}>
      <h3>Calendar</h3>
        <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th> 
            <th>Sa</th>
        </tr>
        <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
        </tr>
      </table>
    </>
      
  );
};
export default ExTable;