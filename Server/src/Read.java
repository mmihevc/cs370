package src;
import java.util.ArrayList;
import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files
import java.lang.String;

public class Read
{

// Return the number of occurances of string lookingFor within the LOTR FOTR Script
public static int Return_Occurances(String lookingFor)
{
  int return_value = 0;
  return countMatches(text.text, lookingFor);
  /*
  try {
  File myObj = new File("Server/src/lotr-the-two-towers.txt");
  //File myObj = new File("lotr-the-two-towers.txt");
  ArrayList<String> lines = new ArrayList<String>();
  try {
  File myObj = new File("lotr-the-two-towers.txt");
  Scanner myReader = new Scanner(myObj);
  while (myReader.hasNextLine()) {
    String data = myReader.nextLine();
    return_value += countMatches(data, lookingFor);
    lines.add(data);
    //System.out.println(data);
  }
  myReader.close();
} catch (FileNotFoundException e) {
  System.out.println("An error occurred.");
  e.printStackTrace();
}

return return_value;
   */
}

	// Return the lines of lines in an ArrayList of string lookingFor within the LOTR FOTR Script
	public static ArrayList<String> Return_Lines(String lookingFor)
	{
		ArrayList<String> lines = new ArrayList<String>();
		try {
			File myObj = new File("lotr-the-two-towers.txt");
			Scanner myReader = new Scanner(myObj);
			while (myReader.hasNextLine()) {
				String data = myReader.nextLine();
				if(data.indexOf(lookingFor) != -1) {
					lines.add(data);
				}
				//System.out.println(data);
			}
			myReader.close();
		} catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
		return lines;
	}


// https://www.techiedelight.com/find-occurrences-of-substring-string-java/
/* Counts how many times the substring appears in the larger string. */
	public static int countMatches(String text, String str) {
		if (text.isEmpty() || str.isEmpty()) {
			return 0;
		}

		int index = 0, count = 0;
		while (true) {
			index = text.indexOf(str, index);
			if (index != -1) {
				count ++;
				index += str.length();
			} else {
				break;
			}
		}
		return count;
	}


public static void main(String[] args)
{
  System.out.println(Return_Occurances( "the"));
	
}
}
