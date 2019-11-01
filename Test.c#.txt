/// &lt;summary&gt;
 /// This Method returns a list of Strings containing the given names of the customers in our database.
/// The same customers are returned but in alphabetical order if OrderByFirstName is true.
/// A maximum of 200 Customers are returned, but less are to be returned if TotalNumberOfPages is &gt; 1
/// &lt;/summary&gt;
/// &lt;param name=&quot;LastName&quot;&gt;The LastName of the Customers to find. Passed in directly from Web Form.&lt;/param&gt;
/// &lt;param name=&quot;TotalNumberOfPages&quot;&gt;The total number of pages used to split results&lt;/param&gt;
/// &lt;param name=&quot;OrderByFirstName&quot;&gt;True if results are to be sorted by given name, otherwise false for database ordering&lt;/param&gt;
/// &lt;returns&gt;&lt;/returns&gt;
        public List&lt;string&gt; GetFirstCustomersThatFitOnAPage(String LastName, int TotalNumberOfPages, bool OrderByFirstName)
        {
            List&lt;string&gt; results = new List&lt;string&gt;();
            bool SortByLastName = true;
            using (System.Data.SqlClient.SqlConnection dbconn = new System.Data.SqlClient.SqlConnection(&quot;SomeConnectionString&quot;))
            {
                dbconn.Open();
                int TopCount = 200 / TotalNumberOfPages;
                if (OrderByFirstName)
                {
                 String SQL = &quot;Select TOP &quot; + TopCount + &quot; * from Customers where LastName =&#39;&quot; + LastName + &quot;&#39; ORDER BY FirstName&quot;;
                 System.Data.SqlClient.SqlCommand comm = new System.Data.SqlClient.SqlCommand(SQL, dbconn);
                 var dr = comm.ExecuteReader();
                 while (dr.Read())
                    {
                        String FirstName = dr.GetString(0);
                        results.Add(FirstName);
                    }
                }
                else
                {
                    String SQL = &quot;Select TOP &quot; + TopCount + &quot; * from Customers where LastName =&#39;&quot; + LastName + &quot;&#39;&quot;;
                    System.Data.SqlClient.SqlCommand comm = new System.Data.SqlClient.SqlCommand(SQL, dbconn);
                    var dr = comm.ExecuteReader();
                    while (dr.Read())
                    {
                        String FirstName = dr.GetString(0);
                        results.Add(FirstName);
                    }
                }
            }
            return results;
        }