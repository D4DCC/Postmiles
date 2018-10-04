<!DOCTYPE html>
<?php
    $out = "";
    if (isset($_POST['name']))
    {
        $out = $_POST['name'] . "," . $_POST['callSign'] . "," . $_POST['coverage'] . "," . $_POST['callSign2'] . "," . $_POST['contact'] . "," . $_POST['vacaStart'] . "," . $_POST['vacaEnd'] . "\n";
        
        
        if ($_POST['region'] == 'north')
        {

            $northvaca = fopen("northvaca.csv", "a") or die("Unable to open file");
            fwrite($northvaca, $out);
            fclose($northvaca);

            
        } else if($_POST['region'] == 'east')
        {
            $eastvaca = fopen("eastvaca.csv", "a") or die("Unable to open file");
            fwrite($eastvaca, $out);
            fclose($eastvaca);

        } else if($_POST['region'] == 'delta')
        {
            $deltavaca = fopen("deltavaca.csv", "a") or die("Unable to open file");
            fwrite($deltavaca, $out);
            fclose($deltavaca);

        } else if($_POST['region'] == 'south')
        {
            $southvaca = fopen("southvaca.csv", "a") or die("Unable to open file");
            fwrite($southvaca, $out);
            fclose($southvaca);

        } else if($_POST['region'] == 'west')
        {
            $westvaca = fopen("westvaca.csv", "a") or die("Unable to open file");
            fwrite($westvaca, $out);
            fclose($westvaca);

        } else if($_POST['region'] == 'specialty')
        {
            $specvaca = fopen("specvaca.csv", "a") or die("Unable to open file");
            fwrite($specvaca, $out);
            fclose($specvaca);

        } else if($_POST['region'] == 'tollbridge')
        {
            $tollvaca = fopen("tollvaca.csv", "a") or die("Unable to open file");
            fwrite($tollvaca, $out);
            fclose($tollvaca);

        }
        
    }

?>



<html lang="en">
    <head>
        <title>Supervisor Coverage</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
            <!-- jQuery library -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <!-- Popper JS -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
            <!-- Latest compiled JavaScript -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
            <script>
                $(document).ready(function(){
                    $('[data-toggle="popover"]').popover(); 
                });
            </script>

            <!--<link href="vacation.css" rel="stylesheet" type="text/css"/>-->
<!--            <script src="success.js"></script>-->
    </head>
    <body class="container">
        <div class="container-fluid bg-light">
            <form action="vacation.php" method="post" class="form-inline bg-white d-flex-column align-items-center">
                <h1 class="font-weight-bold">Supervisor Coverage Form</h1>
                <div class="container d-flex bg-secondary text-info">
                    <div class="form-group">
                        <label for="region">Select Region:</label>
                        <select id="region" name="region" class="form-size form-control ml-4 m-2 p-1">
                            <option value="---"></option>
                            <option value="north">North Bay</option>
                            <option value="east">East Bay</option>
                            <option value="delta">Delta Bay</option>
                            <option value="south">South Bay</option>
                            <option value="west">West Bay</option>
                            <option value="specialty">Specialty</option>
                            <option value="tollbridge">Tollbridge</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name" class="m-2 p-1">Supervisor:</label>
                        <input type="text" name="name" class="form-size form-control m-2 p-1 text-capitalize" id="supname" value="" placeholder="Supervisor Off"/>
                        <label for="callSign" class="m-2 p-1">Call Sign:</label>
                        <input type="text" name="callSign" class="form-size form-control m-2 p-1" id="callSign" placeholder="Ex: 4-5-20"/>
                    </div>
                </div>
                <div class="container bg-dark text-white d-flex flex-wrap">
                    <div class="form-group">
                        <label for="coverage" class="m-2 p-1">Coverage:</label>
                        <a data-toggle="popover" data-placement="left" title="Coverage:" data-content="Whomever is covering for the supervisor"><input type="text" name="coverage" class="form-size form-control m-2 p-1 text-capitalize" id="coverage" placeholder="Unit Covering"/></a>
                        <label for="callSign2" class="m-2 p-1">Call Sign:</label>
                        <input type="text" name="callSign2" class="form-size form-control m-2 p-1" id="callSign2" placeholder="Ex: 4-5-20"/>
                    </div>
                    <div class="form-group">
                        <label for="contact" class="m-2 p-1">Contact:</label>
                        <input type="tel" name="contact" class="form-size form-control m-2 p-1" id="contact" placeholder="555-555-5555"/>
                        <label for="vacaStart" class="m-2 p-1">Start Date:</label>
                        <input type="date" name="vacaStart" class="form-size form-control m-2 p-1" id="vacaStart"/>
                        <label for="vacaEnd" class="m-2 p-1">End Date:</label>
                        <input type="date" value="" name="vacaEnd" class="form-size form-control m-2 p-1" id="vacaEnd"/>
                    </div>
                    <button id="submit" type="submit"  class="btn btn-md btn-success mb-2 ml-2 mr-5">Submit</button>
                    <div id="success">
                        
                    </div>
                </div>
            </form>
            <script>
                $(document).ready(function(){
                    $("#myInput").on("keyup", function() {
                        var value = $(this).val().toLowerCase();
                        $("#myTable tr").filter(function() {
                            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                        });
                    });
                });
            </script> 
            <input type="text" placeholder="Search.." class="form-control mt-2 mb-2" id="myInput">
            <table class="table table-hover table-bordered rounded">
                <thead class="thead-dark">
                    <th>On Vacation</th>
                    <th>Call Sign</th>
                    <th>Coverage</th>
                    <th>Call Sign</th>
                    <th>Contact</th>
                    <th>Start Vacation</th>
                    <th>End Vacation</th>
                </thead>
                <tbody id="myTable">
                    <?php 
                    
                        $northvaca = fopen("northvaca.csv", "r") or die("Unable to read file");
                        while(($ndata = fgetcsv($northvaca, 1000, ","))!== FALSE){
                            for($x = 0; $x < count($ndata); $x++)
                            {
                                    $northin[] = $ndata[$x];
                            }
                        }
                        fclose($northvaca);
                        $_POST['name'] = null;
                    
                        for($i = 0; $i < count($northin);){
                            for($k = 0; $k < count($northin)/7; $k++){
                                print('<tr class="bg-success">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $northin[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                print("</tr>");
                            }
                        }
                    
                        $eastvaca = fopen("eastvaca.csv", "r") or die("Unable to read file");
                        while(($edata = fgetcsv($eastvaca, 1000, ","))!== FALSE){
                            for($x = 0; $x < count($edata); $x++)
                            {
                                $eastin[] = $edata[$x];
                            }
                        }
                        fclose($eastvaca);
                        $_POST['name'] = null;
                    
                        for($i = 0; $i < count($eastin);){
                            for($k = 0; $k < count($eastin)/7; $k++){
                                print('<tr class="bg-primary">');
                                for($j = 0; $j < 7; $j++){
                                    print("<td class='capitalize'>");
                                    print("<b>" . $eastin[$i] . "</b>");
                                    print("</td>");
                                    $i++;
                                }
                                print("</tr>");
                            }
                        }
                    
                        $deltavaca = fopen("deltavaca.csv", "r") or die("Unable to read file");
                            while(($ddata = fgetcsv($deltavaca, 1000, ","))!== FALSE){
                                for($x = 0; $x < count($ddata); $x++)
                                {
                                    $deltain[] = $ddata[$x];
                                }
                            }
                            fclose($deltavaca);
                            $_POST['name'] = null;

                            for($i = 0; $i < count($deltain);){
                                for($k = 0; $k < count($deltain)/7; $k++){
                                    print('<tr class="bg-info">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $deltain[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                    print("</tr>");
                                }
                            }
                    
                        $southvaca = fopen("southvaca.csv", "r") or die("Unable to read file");
                            while(($sdata = fgetcsv($southvaca, 1000, ","))!== FALSE){
                                for($x = 0; $x < count($sdata); $x++)
                                {
                                    $southin[] = $sdata[$x];
                                }
                            }
                            fclose($southvaca);
                            $_POST['name'] = null;

                            for($i = 0; $i < count($southin);){
                                for($k = 0; $k < count($southin)/7; $k++){
                                    print('<tr class="bg-danger">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $southin[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                    print("</tr>");
                                }
                            }
                    
                        $westvaca = fopen("westvaca.csv", "r") or die("Unable to read file");
                            while(($westdata = fgetcsv($westvaca, 1000, ","))!== FALSE){
                                for($x = 0; $x < count($westdata); $x++)
                                {
                                    $westin[] = $westdata[$x];
                                }
                            }
                            fclose($westvaca);
                            $_POST['name'] = null;

                            for($i = 0; $i < count($westin);){
                                for($k = 0; $k < count($westin)/7; $k++){
                                    print('<tr class="bg-warning">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $westin[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                    print("</tr>");
                                }
                            }
                    
                        $specvaca = fopen("specvaca.csv", "r") or die("Unable to read file");
                            while(($specdata = fgetcsv($specvaca, 1000, ","))!== FALSE){
                                for($x = 0; $x < count($specdata); $x++)
                                {
                                    $specin[] = $specdata[$x];
                                }
                            }
                            fclose($specvaca);
                            $_POST['name'] = null;

                            for($i = 0; $i < count($specin);){
                                for($k = 0; $k < count($specin)/7; $k++){
                                    print('<tr class="bg-dark text-white">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $specin[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                    print("</tr>");
                                }
                            }
                    
                        $tollvaca = fopen("tollvaca.csv", "r") or die("Unable to read file");
                            while(($tolldata = fgetcsv($tollvaca, 1000, ","))!== FALSE){
                                for($x = 0; $x < count($tolldata); $x++)
                                {
                                    $tollin[] = $tolldata[$x];
                                }
                            }
                            fclose($tollvaca);
                            $_POST['name'] = null;

                            for($i = 0; $i < count($tollin);){
                                for($k = 0; $k < count($tollin)/7; $k++){
                                    print('<tr class="bg-secondary">');
                                    for($j = 0; $j < 7; $j++){
                                        print("<td class='capitalize'>");
                                        print("<b>" . $tollin[$i] . "</b>");
                                        print("</td>");
                                        $i++;
                                    }
                                    print("</tr>");
                                }
                            } ?>
                </tbody>
            </table>
        </div>
    </body>
</html>