import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import axios from 'axios';
import { Image } from 'react-native';

interface AutoSuggestProps {
  minQueryLength?: number;
  placeholder?: string;
  onSuggestionSelect?: (suggestion: string) => void;
  icon?: any;
  containerStyle?: ViewStyle | string;
  handlePress?: (location: { latitude: number; longitude: number; address: string }) => void; // Added handlePress prop
}

const AutoSuggest: React.FC<AutoSuggestProps> = ({
  minQueryLength = 2,
  placeholder = 'Search for a place',
  onSuggestionSelect,
  icon,
  containerStyle,
  handlePress, // Destructure the handlePress prop
}) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setSuggestions([]);
    };
  }, []);

  const handleInputChange = async (text: string) => {
    setQuery(text);

    if (text.length >= minQueryLength) {
      try {
        const response = await axios.get(
          `https://api.olamaps.io/places/v1/autocomplete?input=${text}&api_key=ELYYqxMExuYrhaYoGf4UxPF7nKSzvElHTAqDY3em`
        );
        const predictions = response.data.predictions || [];
        setSuggestions(predictions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionPress = async (suggestion: any) => {
    setQuery(suggestion.description);
    setSuggestions([]);
    
    try {
      const detailsResponse = await axios.get(
        `https://api.olamaps.io/places/v1/details?place_id=${suggestion.place_id}&api_key=ELYYqxMExuYrhaYoGf4UxPF7nKSzvElHTAqDY3em`
      );
      const locationData = detailsResponse.data.result.geometry.location;
      const location = {
        latitude: locationData.lat,
        longitude: locationData.lng,
        address: suggestion.description,
      };
      
      if (handlePress) {
        handlePress(location); // Call handlePress with location data
      }

      if (onSuggestionSelect) {
        onSuggestionSelect(suggestion.description);
      }
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setSuggestions([]);
    }, 200);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
      <Text style={styles.suggestionItem}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, typeof containerStyle === 'string' ? {} : containerStyle]}>
      <View style={styles.inputContainer}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={query}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      {isFocused && suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.suggestionsContainer}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    zIndex: 1,
    paddingLeft: 8,
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: '#ddd',
    paddingLeft: 8,
    borderRadius: 5,
    zIndex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  suggestionsContainer: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 200,
    zIndex: 2,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default AutoSuggest;
