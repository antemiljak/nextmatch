<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Next Match</title>
    <!--Dodat favicon-->
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="style-matches.css?v=<?php echo time(); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://use.fontawesome.com/e1a0626ea2.js"></script>
</head>

<body>

    <section class="sub-header">
        <nav>

            <a href="index.html"><img src="images/logo.png" alt="NextMatchLogo"></a>

            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="account.html">ACCOUNT</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <h1>Next Match</h1>

        

        <div class="scroll-playersdatabase">
<table>
<?php
$conn = mysqli_connect('localhost',"MiljakA", "PZI_MiljakA1", "MiljakA");
$sql = "SELECT * FROM Matches ORDER BY Hometeam";
$result = $conn->query($sql);
echo "<tr><td>Hometeam </td> <td>prediction</td> <td>Awayteam</td></tr>";
while ($myrow=$result->fetch_row())
{
    echo "<tr><td>".$myrow[1]."</td><td> ".$myrow[2]."</td><td> ".$myrow[3]."</td></tr>";
        
}
?>
</table>

</div>
      


        

    </section>




    <section class="footer">
        <a id="contact"></a>
        <h4>About Us</h4>
        <p>This was made by Ante Miljak, Mario Miličević, Karlo Marić, Andrija Matošić and Domagoj Martinović</p>
        <p> You can contact us at : amilja01@fesb.hr mmilic05@fesb.hr kmaric00@fesb.hr amatos00@fesb.hr dmarti00@fesb.hr</p>
        <p>Or on social media down below at <em>NextMatchFootballApp</em></p>
        
        
        <div class="icons">
            <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/?lang=hr"><i class="fa fa-twitter"></i></a>
            <a href="https://instagram.com"><i class="fa fa-instagram"></i></a>
        </div>

     
    </section>


<!--Javascript za menu-->
    <script>
        var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right="0";
        
        }

        function hideMenu(){
            navLinks.style.right="-200px";
        
        }
    </script>

		<script src="function_library.js"></script>
    	<script src="scripts.js"></script>
</body>

</html>
